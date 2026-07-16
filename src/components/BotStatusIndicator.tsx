// src/components/BotStatusIndicator.tsx
import { createClient } from '@supabase/supabase-js';

// Replace these with the URL and Publishable Key you found in the Supabase Dashboard
const supabaseUrl = 'https://dtbuzlggibtuicfuunan.supabase.co/rest/v1/'; 
const supabaseKey = 'sb_publishable_nYxQWc1dPnzcQJb_eMIgOg_JEw9ihHX';

const supabase = createClient(supabaseUrl, supabaseKey);

interface Bot {
  name: string;
  status: 'online' | 'offline'; // Typing the status specifically
  ping: string;
}

export default async function BotStatusIndicator() {
  // Fetching data from your 'bot_status' table
  // The 'revalidate' option ensures the status updates every 60 seconds
  const { data: bots, error } = await supabase
    .from('bot_status')
    .select('*');

  if (error || !bots) {
    return <div style={{ color: '#ef4444', fontSize: '0.6rem' }}>OFFLINE</div>;
  }

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {bots.map((bot: Bot) => (
        <div 
          key={bot.name} 
          title={`${bot.name}: ${bot.status} (${bot.ping})`} 
          style={{ 
            width: 10, 
            height: 10, 
            borderRadius: '50%', 
            background: bot.status === 'online' ? '#22c55e' : '#ef4444',
            boxShadow: bot.status === 'online' ? '0 0 8px #22c55e' : 'none',
            cursor: 'help'
          }} 
        />
      ))}
    </div>
  );
}