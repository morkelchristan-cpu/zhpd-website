'use client';
import { useSession } from 'next-auth/react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const REQUIRED_ROLE = "1526278498816364737";

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'unauthenticated') return <div>Please log in to continue.</div>;

  // Access the roles we added in route.ts
  const userRoles: string[] = (session?.user as { roles?: string[] })?.roles || [];

  if (!userRoles.includes(REQUIRED_ROLE)) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Access Denied</h1>
        <p>You do not have the required ZHPD clearance.</p>
      </div>
    );
  }

  return <>{children}</>;
}