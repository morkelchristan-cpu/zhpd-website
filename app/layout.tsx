import SessionWrapper from "@/src/components/SessionWrapper";
import Navbar from "@/src/components/Navbar";
import BotStatusIndicator from "@/src/components/BotStatusIndicator"; // Import the status indicator

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ background: '#020617' }}>
      <body style={{ background: '#020617', margin: 0, padding: 0 }}>
        <SessionWrapper>
          <Navbar />
          
          {/* Status indicator placed top-left, just below/near the navbar */}
          <div style={{ 
            position: 'fixed', 
            top: '80px', // Adjust this based on your Navbar height
            left: '20px', 
            zIndex: 1000 
          }}>
            <BotStatusIndicator />
          </div>

          <main style={{ marginTop: '100px' }}> {/* Add top margin so content isn't hidden by nav */}
            {children}
          </main>
        </SessionWrapper>
      </body>
    </html>
  );
}