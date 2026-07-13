'use client';

import { SessionProvider } from "next-auth/react";
import AuthGuard from "@/src/components/AuthGuard";
import "./globals.css"; // Ensure your global styles are imported here

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AuthGuard>
            {children}
          </AuthGuard>
        </SessionProvider>
      </body>
    </html>
  );
}