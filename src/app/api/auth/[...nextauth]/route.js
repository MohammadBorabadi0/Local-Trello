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
                    throw new Error("مشکلی در سرور رخ داده است");
                }

                if (!email || !password)
                    throw new Error("لطفا اطلاعات معتبر وارد کنید");

                const user = await User.findOne({ email });

                if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

                const isValid = await verifyPassword(password, user.password);

                if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

                return { email };
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // issuer: process.env.NEXTAUTH_CLIENT_ISSUER,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };