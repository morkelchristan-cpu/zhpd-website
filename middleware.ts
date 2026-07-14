import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    // This points to the custom sign-in page you created at src/app/auth/signin/page.tsx
    signIn: "/auth/signin", 
  },
});

export const config = { 
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (next-auth internal routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth/signin (your custom login page)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|auth/signin).*)",
  ],
};