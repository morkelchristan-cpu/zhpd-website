import NextAuth, { DefaultSession, Session } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

// 1. Module augmentation: Tell TypeScript that 'roles' exists on user
declare module "next-auth" {
  interface Session {
    user: {
      roles: string[];
    } & DefaultSession["user"];
    accessToken?: string;
  }
}

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: { params: { scope: 'identify guilds guilds.members.read' } },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Forward the access token from the JWT to the session
      (session as Session).accessToken = token.accessToken as string | undefined;
      
      try {
        const response = await fetch(`https://discord.com/api/users/@me/guilds/YOUR_GUILD_ID/member`, {
          headers: { Authorization: `Bearer ${token.accessToken}` }
        });
        const data = await response.json();
        session.user.roles = data.roles || [];
      } catch {
        session.user.roles = [];
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };