import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import { verifyPassword } from '@/utils/auth';
import connectDB from '@/utils/connectDB';

const handler = NextAuth({
    session: 'jwt',
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connectDB();
                } catch (error) {
                    throw new Error("There was a problem with the server!");
                }

                if (!email || !password)
                    throw new Error("Please enter valid information!");

                const user = await User.findOne({ email });

                if (!user) throw new Error("There is no user with this information!");

                const isValid = await verifyPassword(password, user.password);

                if (!isValid) throw new Error("The email or password is incorrect");

                return { email };
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };