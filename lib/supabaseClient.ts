import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mlshvpsdargptwffxwrk.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sc2h2cHNkYXJncHR3ZmZ4d3JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNTAyNzcsImV4cCI6MjEwMDcyNjI3N30._xaSjo9sWB52SKSEr5LpezPYx-HKDeXDUJqt505ebC4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
