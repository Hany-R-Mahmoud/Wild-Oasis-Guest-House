import NextAuth from "next-auth";
import Google from 'next-auth/providers/google'

const authConfig = {
  providers: [
    Google({clientId:process.env.local.})
  ],
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  
});
