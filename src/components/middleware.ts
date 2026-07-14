import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    // This directs unauthenticated users to your custom sign-in page
    signIn: "/auth/signin", 
  },
});

export const config = { 
  // This matcher protects all routes, but explicitly ignores:
  // 1. API routes (required for login to function)
  // 2. Next.js static assets (_next/static, _next/image)
  // 3. Your custom sign-in page (otherwise you get an infinite redirect loop)
  // 4. Favicon
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|auth/signin).*)",
  ],
};