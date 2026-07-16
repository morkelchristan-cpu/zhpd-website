'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/src/components/lib/supabase'; // Ensure this path matches your lib location

export default function StatusPage() {
  const [bots, setBots] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      setLoading(true);
      try {
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
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    }
    fetchStatus();
  }, []);

  return (
    <main style={{ 
      background: '#020617', 
      color: '#f8fafc', 
      minHeight: '100vh', 
      padding: '100px 20px',
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>SYSTEM MONITOR</h1>
      
      {error && (
        <div style={{ background: '#7f1d1d', padding: '20px', borderRadius: '8px', textAlign: 'center', margin: '20px auto', maxWidth: '600px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {loading ? (
        <p style={{ textAlign: 'center' }}>Syncing with database...</p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px', 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}>
          {bots.length === 0 ? (
            <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>No active bots found.</p>
          ) : (
            bots.map((bot, index) => (
              <div key={index} style={{ 
                background: '#1e293b', 
                padding: '20px', 
                borderRadius: '12px', 
                border: '1px solid #334155' 
              }}>
                <h2 style={{ fontSize: '1.2rem', margin: '0 0 10px 0' }}>{bot.Name}</h2>
                <p style={{ margin: '5px 0' }}>Status: {bot.Status}</p>
                <p style={{ margin: '5px 0' }}>Ping: {bot.Ping}</p>
              </div>
            ))
          )}
        </div>
      )}
    </main>
  );
}