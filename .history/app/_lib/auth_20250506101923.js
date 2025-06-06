import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
      // if (auth.user) return true
      // else return false
    },
  },
  pages: {
    singIn: "/login",
  },
};

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(authConfig);
