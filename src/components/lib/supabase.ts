import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dtbuzlggibtuicfuunan.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0YnV6bGdnaWJ0dWljZnV1bmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyMTQxNDQsImV4cCI6MjA5OTc5MDE0NH0.1EKqUQ6OopequE4QILGqLHoonjUQi6_ttv1ZRhMpPyo';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase credentials!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);