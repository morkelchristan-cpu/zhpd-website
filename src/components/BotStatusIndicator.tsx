'use client'; // Change to client so we can use hooks if needed
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

type Bot = {
  name: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function BotStatusIndicator() {
  const [bots, setBots] = useState<Bot[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('bot_status').select('*');
      if (data) setBots(data);
    }
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {bots.length === 0 ? <p>No bots reporting...</p> : bots.map(bot => (
        <div key={bot.name} style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
      ))}
    </div>
  );
}