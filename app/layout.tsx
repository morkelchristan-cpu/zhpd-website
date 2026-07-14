import SessionWrapper from "@/src/components/SessionWrapper"; // Adjust path if needed
import Navbar from "@/src/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}