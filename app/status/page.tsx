import { createClient } from '@supabase/supabase-js';

// Replace these with your actual values from the Supabase dashboard
const supabaseUrl = 'https://dtbuzlggibtuicfuunan.supabase.co/rest/v1/'; 
const supabaseKey = 'sb_publishable_nYxQWc1dPnzcQJb_eMIgOg_JEw9ihHX';
const supabase = createClient(supabaseUrl, supabaseKey);

interface Bot {
  name: string;
  status: string;
  ping: string;
}

export default async function BotStatusIndicator() {
  // Fetching data from your 'bot_status' table
  const { data: bots, error } = await supabase.from('bot_status').select('*');

  if (error || !bots) {
    return <div>Error loading status</div>;
  }

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      {bots.map((bot: Bot) => (
        <div key={bot.name} title={`${bot.name}: ${bot.status}`} style={{ 
          width: 10, height: 10, borderRadius: '50%', 
          background: bot.status === 'online' ? '#22c55e' : '#ef4444',
          boxShadow: bot.status === 'online' ? '0 0 8px #22c55e' : 'none'
        }} />
      ))}
    </div>
  );
}