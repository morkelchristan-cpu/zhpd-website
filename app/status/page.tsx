// src/app/status/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/src/components/lib/supabase'; // Import the clean, shared instance

export default function StatusPage() {
  const [bots, setBots] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      setLoading(true);
      try {
        // Query the table using the shared instance
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
    <main style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '100px 20px' }}>
      <h1 style={{ textAlign: 'center' }}>SYSTEM MONITOR</h1>
      
      {error && (
        <div style={{ background: '#7f1d1d', padding: '20px', borderRadius: '8px', textAlign: 'center', margin: '20px auto', maxWidth: '600px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {loading ? (
        <p style={{ textAlign: 'center' }}>Syncing with database...</p>
      ) : (
        <div style={{ textAlign: 'center' }}>
          {bots.length === 0 ? <p>No active bots found.</p> : <pre>{JSON.stringify(bots, null, 2)}</pre>}
        </div>
      )}
    </main>
  );
}