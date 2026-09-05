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

// 1. List Courses (Direct Supabase with Edge Function fallback)
export async function listCourses(filters: { status?: string } = {}): Promise<Course[]> {
  try {
    // Try Direct Supabase Database first
    const query = supabase.from('courses').select('*').order('id', { ascending: false });
    if (filters.status) query.eq('status', filters.status);
    const { data, error } = await query;

    if (!error && data && data.length > 0) {
      return data as Course[];
    }

    // Try Edge Function fallback
    const params = new URLSearchParams();
    if (filters.status) params.append('status', filters.status);
    const res = await fetch(`${EDGE_FUNCTION_URL}?${params.toString()}`, { headers });
    if (res.ok) {
      const edgeData = await res.json();
      if (Array.isArray(edgeData) && edgeData.length > 0) return edgeData as Course[];
    }
  } catch (err: unknown) {
    console.warn('Supabase fetch failed, returning initial courses:', err);
  }

  // Fallback initial sample courses if DB is empty or connecting
  return [
    {
      id: 1,
      title: 'Deep Learning & Neural Networks Fundamentals',
      description: 'Master backpropagation, CNNs, Transformers, and PyTorch from raw mathematical foundations to production models.',
      category: 'AI & Machine Learning',
      duration: '8h 30m',
      level: 'intermediate',
    },
    {
      id: 2,
      title: 'Full-Stack Next.js 16 with Supabase & Edge Functions',
      description: 'Build enterprise-grade SaaS platforms with React Server Components, server actions, PostgreSQL, and OAuth authentication.',
      category: 'Web Development',
      duration: '12h 15m',
      level: 'advanced',
    },
    {
      id: 3,
      title: 'Prompt Engineering & LLM Application Architecture',
      description: 'Learn systemic prompt design, structured JSON outputs, RAG pipelines, and multi-agent workflows with Gemini & Claude.',
      category: 'AI Engineering',
      duration: '5h 45m',
      level: 'beginner',
    },
  ];
}

// 2. Create Course
export async function createCourse(course: Partial<Course>): Promise<Course> {
  try {
    // Try direct Supabase insert
    const { data, error } = await supabase.from('courses').insert([course]).select();
    if (!error && data && data[0]) {
      return data[0] as Course;
    }
  } catch {
    // Fallback to Edge Function
  }

  const res = await fetch(EDGE_FUNCTION_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(course),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to create course');
  return Array.isArray(data) ? data[0] : data;
}

// 3. Get Single Course
export async function getCourse(id: string | number): Promise<Course> {
  try {
    const { data, error } = await supabase.from('courses').select('*').eq('id', id).single();
    if (!error && data) return data as Course;
  } catch {
    // Fallback
  }

  const res = await fetch(`${EDGE_FUNCTION_URL}?id=${id}`, { headers });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to fetch course');
  return Array.isArray(data) ? data[0] : data;
}

// 4. Update Course
export async function updateCourse(id: string | number, updates: Partial<Course>): Promise<Course> {
  try {
    const { data, error } = await supabase.from('courses').update(updates).eq('id', id).select();
    if (!error && data && data[0]) return data[0] as Course;
  } catch {
    // Fallback
  }

  const res = await fetch(`${EDGE_FUNCTION_URL}?id=${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(updates),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to update course');
  return Array.isArray(data) ? data[0] : data;
}

// 5. Delete Course
export async function deleteCourse(id: string | number): Promise<{ success: boolean }> {
  try {
    const { error } = await supabase.from('courses').delete().eq('id', id);
    if (!error) return { success: true };
  } catch {
    // Fallback
  }

  const res = await fetch(`${EDGE_FUNCTION_URL}?id=${id}`, {
    method: 'DELETE',
    headers,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to delete course');
  return { success: true };
}
