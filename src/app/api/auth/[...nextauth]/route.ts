// import NextAuth, { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions: AuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "admin@example.com" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         // Check for email and password
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Please provide both email and password.");
//         }

//         // Hardcoded admin credentials (Replace with database in the future)
//         const adminUser = { id: "1", name: "Admin", email: "admin@example.com", password: "admin123" };

//         if (credentials.email === adminUser.email && credentials.password === adminUser.password) {
//           return { id: adminUser.id, name: adminUser.name, email: adminUser.email };
//         }

//         // Throw error for invalid credentials
//         throw new Error("Invalid email or password");
//       }
//     })
//   ],
//   pages: {
//     signIn: "/admin/login" // Custom login page
//   },
//   session: {
//     strategy: "jwt" // JWT session strategy
//   },
//   secret: process.env.NEXTAUTH_SECRET, // Secret for JWT signing
// };

// const handler = NextAuth(authOptions);

// // Correctly export GET and POST methods
// export { handler as GET, handler as POST };



// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions: NextAuthOptions = {  // FIXED HERE
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "admin@example.com" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Please provide both email and password.");
//         }

//         const adminUser = { id: "1", name: "Admin", email: "admin@example.com", password: "admin123" };

//         if (credentials.email === adminUser.email && credentials.password === adminUser.password) {
//           return { id: adminUser.id, name: adminUser.name, email: adminUser.email };
//         }

//         throw new Error("Invalid email or password");
//       }
//     })
//   ],
//   pages: {
//     signIn: "/admin/login"
//   },
//   session: {
//     strategy: "jwt"
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };




import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please provide both email and password.");
        }

        const adminUser = { id: "1", name: "Admin", email: "admin@example.com", password: "admin123" };

        if (credentials.email === adminUser.email && credentials.password === adminUser.password) {
          return { id: adminUser.id, name: adminUser.name, email: adminUser.email };
        }

        throw new Error("Invalid email or password");
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
