// src/components/BotStatusIndicator.tsx
interface Bot {
  name: string;
  status: 'online' | 'offline';
}

export default async function BotStatusIndicator() {
  const res = await fetch('YOUR_DATABASE_API_URL/status', { next: { revalidate: 60 } });
  const bots: Bot[] = await res.json(); 

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      {bots.map((bot) => (
        <div key={bot.name} title={`${bot.name}: ${bot.status}`} style={{ 
          width: 10, height: 10, borderRadius: '50%', 
          background: bot.status === 'online' ? '#22c55e' : '#ef4444',
          boxShadow: bot.status === 'online' ? '0 0 8px #22c55e' : 'none'
        }} />
      ))}
    </div>
  );
}