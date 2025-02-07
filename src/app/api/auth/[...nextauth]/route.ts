import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextApiRequest, NextApiResponse } from 'next';

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const user = { id: '1', name: 'Maryam Farmani', email: 'mailto:test@example.com' };

                if (credentials?.username === 'user' && credentials?.password === 'password') {
                    return user;
                } else {
                    return null;
                }
            }
        }),
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
    },
    callbacks: {
        async session({ session, token }) {
            if (token && typeof token.user === 'object') {
                session.user = token.user as {
                    id: string;
                    name: string;
                    email: string;
                };
            }
            return session;
        },
    },
};

const authHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);

export { authHandler as GET, authHandler as POST };