import ProtectedRoute from '@/src/components/ProtectedRoute';

export default function ProtectedPage() {
  return (
    <ProtectedRoute>
      <h1>Authorized Command Portal</h1>
      <p>Welcome, Command Staff.</p>
    </ProtectedRoute>
  );
}