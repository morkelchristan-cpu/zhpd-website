import './globals.css';
import Navbar from '@/src/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient">
        <Navbar />
        <div className="content-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}