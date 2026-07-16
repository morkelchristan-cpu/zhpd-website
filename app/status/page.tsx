'use client';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

// DIRECTLY PASTE YOUR VALUES HERE
const SUPABASE_URL = 'https://dtbuzlggibtuicfuunan.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0YnV6bGdnaWJ0dWljZnV1bmFuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NDIxNDE0NCwiZXhwIjoyMDk5NzkwMTQ0fQ.Dobfuw00bjNYjMs3M7tQBlodbDOq11x9ps3GxmdW4Ds';

// Initialize with a manual check
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function StatusPage() {
  const [bots, setBots] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      try {
        setLoading(true);
        // Explicitly query the table
        const { data, error: sbError } = await supabase
          .from('bot_status')
          .select('*');
        
        if (sbError) {
          console.error("Supabase Error:", sbError);
          setError(sbError.message);
        } else {
          setBots(data || []);
        }
      } catch (err: any) {
        console.error("Caught error:", err);
        setError("Network error or invalid connection.");
      } finally {
        setLoading(false);
      }
    }
    fetchStatus();
  }, []);

  return (
    <main style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '100px 20px' }}>
      <h1 style={{ textAlign: 'center' }}>SYSTEM MONITOR</h1>
      
      {error && (
        <div style={{ background: '#7f1d1d', padding: '20px', borderRadius: '8px', textAlign: 'center', margin: '20px auto', maxWidth: '600px' }}>
          <strong>Connection Error:</strong> {error}
        </div>
      )}

      {loading ? (
        <p style={{ textAlign: 'center' }}>Syncing...</p>
      ) : (
        <div style={{ textAlign: 'center' }}>
          {bots.length === 0 ? <p>Table is empty.</p> : <pre>{JSON.stringify(bots, null, 2)}</pre>}
        </div>
      )}
    </main>
  );
}