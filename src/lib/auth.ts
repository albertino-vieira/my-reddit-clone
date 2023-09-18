import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/signin",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        })
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.image ;
                session.user.username = token.username ;
            }
        }
        async jwt({ token, user }) {
            const dbUser = await db.user.findFirst({
                where: { email: token.email },
            })

            if(!dbUser){
                token.id = user!.id
                return token
            }

            if(!dbUser.username){
                await db.user.update({
                   where: {
                          id: dbUser.id
                   }, data:{
                    username: nanoid(10)
                   }
                })
            }
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
                username: dbUser.username,
              }
            },
            redirect() {
              return '/'
            },
        }
    }

}