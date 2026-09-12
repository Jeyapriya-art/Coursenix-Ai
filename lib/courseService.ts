import { supabase } from './supabaseClient';
import type { Course } from '@/types/course';

const EDGE_FUNCTION_URL = 'https://mlshvpsdargptwffxwrk.supabase.co/functions/v1/courses';
const ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sc2h2cHNkYXJncHR3ZmZ4d3JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNTAyNzcsImV4cCI6MjEwMDcyNjI3N30._xaSjo9sWB52SKSEr5LpezPYx-HKDeXDUJqt505ebC4';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${ANON_KEY}`,
};


// Helper: throws if no logged-in user (every write needs an owner)
async function getCurrentUserId(): Promise<string> {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    throw new Error('Unauthorized: no active session');
  }
  return data.user.id;
}

// 1. List Courses (Direct Supabase with Edge Function fallback)
export async function listCourses(filters: { status?: string } = {}): Promise<Course[]> {
  try {
    const query = supabase.from('courses').select('*').order('id', { ascending: false });
    if (filters.status) query.eq('status', filters.status);
    const { data, error } = await query;

    if (!error && data && data.length > 0) {
      return data as Course[];
    }

    // Only fall back to Edge Function on a genuine failure, not just "0 rows"
    if (error) {
      const params = new URLSearchParams();
      if (filters.status) params.append('status', filters.status);
      const res = await fetch(`${EDGE_FUNCTION_URL}?${params.toString()}`, { headers });
      if (res.ok) {
        const edgeData = await res.json();
        if (Array.isArray(edgeData)) return edgeData as Course[];
      }
    }

    return data ? (data as Course[]) : [];
  } catch (err: unknown) {
    console.warn('Supabase fetch failed:', err);
    return [];
  }
}

// 2. Create Course — user_id is now always attached to the logged-in user
export async function createCourse(course: Partial<Course>): Promise<Course> {
  const userId = await getCurrentUserId();
  const payload = { ...course, user_id: userId };

  const { data, error } = await supabase.from('courses').insert([payload]).select();

  if (error) {
    throw new Error(error.message || 'Failed to create course');
  }
  if (!data || data.length === 0) {
    // RLS silently rejected the insert (e.g. spoofed user_id)
    throw new Error('Unauthorized: could not create course');
  }
  return data[0] as Course;
}

// 3. Get Single Course
export async function getCourse(id: string | number): Promise<Course> {
  const { data, error } = await supabase.from('courses').select('*').eq('id', id).single();
  if (error) {
    throw new Error(error.message || 'Course not found or access denied');
  }
  return data as Course;
}

// 4. Update Course — detects RLS-blocked updates instead of reporting false success
export async function updateCourse(id: string | number, updates: Partial<Course>): Promise<Course> {
  const { data, error } = await supabase.from('courses').update(updates).eq('id', id).select();

  if (error) {
    throw new Error(error.message || 'Failed to update course');
  }
  if (!data || data.length === 0) {
    // Row exists but RLS blocked it (not owner, not admin) — or row doesn't exist.
    throw new Error('Unauthorized: you do not have permission to update this course');
  }
  return data[0] as Course;
}

// 5. Delete Course — detects RLS-blocked deletes instead of reporting false success
export async function deleteCourse(id: string | number): Promise<{ success: boolean }> {
  const { data, error } = await supabase.from('courses').delete().eq('id', id).select();

  if (error) {
    throw new Error(error.message || 'Failed to delete course');
  }
  if (!data || data.length === 0) {
    // Nothing was actually deleted — either row doesn't exist or RLS blocked it
    throw new Error('Unauthorized: you do not have permission to delete this course');
  }
  return { success: true };
}