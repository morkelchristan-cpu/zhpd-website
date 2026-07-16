import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dtbuzlggibtuicfuunan.supabase.co/rest/v1/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0YnV6bGdnaWJ0dWljZnV1bmFuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NDIxNDE0NCwiZXhwIjoyMDk5NzkwMTQ0fQ.Dobfuw00bjNYjMs3M7tQBlodbDOq11x9ps3GxmdW4Ds';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);