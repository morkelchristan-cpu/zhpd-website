'use client';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

// 1. HARD-CODE YOUR URL AND KEY HERE TEMPORARILY TO BYPASS ENV ISSUES
// Get these from your Supabase Dashboard > Settings > API
const SUPABASE_URL = 'https://dtbuzlggibtuicfuunan.supabase.co/rest/v1/'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0YnV6bGdnaWJ0dWljZnV1bmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyMTQxNDQsImV4cCI6MjA5OTc5MDE0NH0.1EKqUQ6OopequE4QILGqLHoonjUQi6_ttv1ZRhMpPyo';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function StatusPage() {
  const [bots, setBots] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const { data, error: sbError } = await supabase.from('bot_status').select('*');
        
        if (sbError) {
          console.error("Supabase Query Error:", sbError);
          throw new Error(sbError.message);
        }
        
        setBots(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchStatus();
  }, []);

  return (
    <main style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '100px 20px' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '50px' }}>SYSTEM MONITOR</h1>

        {error && (
          <div style={{ background: '#7f1d1d', padding: '20px', borderRadius: '8px', textAlign: 'center', marginBottom: '20px' }}>
            <p><strong>Database Error:</strong> {error}</p>
          </div>
        )}

        {loading ? (
          <p style={{ textAlign: 'center' }}>Syncing with database...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {bots.length > 0 ? bots.map((bot) => (
              <div key={bot.name} style={{ background: '#1e293b', padding: '25px', borderRadius: '12px', border: '1px solid #334155' }}>
                <h2 style={{ fontSize: '1.25rem' }}>{bot.name}</h2>
                <p>Status: {bot.status}</p>
                <p>Ping: {bot.ping}</p>
              </div>
            )) : (
              <p style={{ textAlign: 'center', color: '#64748b' }}>Table is empty. Run your bot script to populate data.</p>
            )}
          </div>
        )}
      </motion.div>
    </main>
  );
}