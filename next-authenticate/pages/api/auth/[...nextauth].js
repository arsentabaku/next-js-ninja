import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHub({
      clientId: "68aacd7afb35cf1e79a2",
      clientSecret: "2c133797ce5f9030ead3f8b87f319376c9ac7b85",
    }),
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "asdcvbtjhm",
  }
});
