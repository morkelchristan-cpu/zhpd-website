// 1. Define the interface
interface Bot {
  name: string;
  status: string;
  ping: string;
}

export default async function BotStatusPage() {
  let bots: Bot[] = [];
  let error = false;

  // 2. Fetch data outside of the JSX return
  try {
    const response = await fetch('YOUR_DATABASE_API_URL/status', { cache: 'no-store' });
    if (!response.ok) throw new Error();
    bots = await response.json();
  } catch (e) {
    error = true;
  }

  // 3. Handle the error state before the main return
  if (error) {
    return (
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1 className="gradient-text">SYSTEM UNAVAILABLE</h1>
        <p>Could not reach the status server. Please try again later.</p>
      </main>
    );
  }

  // 4. Return the successful UI
  return (
    <main style={{ padding: '40px' }}>
      <h1 className="gradient-text">BOT NETWORK STATUS</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
        {bots.map((bot: Bot) => (
          <div key={bot.name} className="glass-card">
            <h2>{bot.name}</h2>
            <p>Status: {bot.status}</p>
            <p>Latency: {bot.ping}</p>
          </div>
        ))}
      </div>
    </main>
  );
}