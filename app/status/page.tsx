'use client';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

// Initialize with a check to see if variables exist
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl || '', supabaseKey || '');

export default function StatusPage() {
  const [bots, setBots] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStatus() {
      try {
        if (!supabaseUrl || !supabaseKey) {
          throw new Error("Missing Supabase Environment Variables");
        }
        
        const { data, error: sbError } = await supabase.from('bot_status').select('*');
        
        if (sbError) throw sbError;
        setBots(data || []);
      } catch (err: any) {
        setError(err.message);
      }
    }
    fetchStatus();
  }, []);

  return (
    <main style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '100px 20px' }}>
      <h1 style={{ textAlign: 'center' }}>SYSTEM MONITOR</h1>
      
      {error && (
        <div style={{ color: '#ef4444', textAlign: 'center', padding: '20px', border: '1px solid #ef4444', margin: '20px auto', maxWidth: '500px' }}>
          <strong>ERROR:</strong> {error}
          <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Check your .env.local file and restart your server.</p>
        </div>
      )}

      {!error && bots.length === 0 && (
        <p style={{ textAlign: 'center', color: '#64748b' }}>No data found in database.</p>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
        {bots.map((bot) => (
          <div key={bot.name} style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
            <h3>{bot.name}</h3>
            <p>Status: {bot.status}</p>
            <p>Ping: {bot.ping}</p>
          </div>
        ))}
      </div>
    </main>
  );
}