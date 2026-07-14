import NextAuth, { DefaultSession, Session } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

// Module augmentation to include roles and access token in session
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
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Forward the access token to the session
      (session as Session).accessToken = token.accessToken as string | undefined;
      
      try {
        // REPLACE 'YOUR_GUILD_ID' WITH YOUR ACTUAL DISCORD SERVER ID
        const response = await fetch(`https://discord.com/api/users/@me/guilds/${process.env.DISCORD_GUILD_ID}/member`, {
          headers: { Authorization: `Bearer ${token.accessToken}` }
        });
        
        if (response.ok) {
          const data = await response.json();
          session.user.roles = data.roles || [];
        } else {
          session.user.roles = [];
        }
      } catch (error) {
        session.user.roles = [];
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };