import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";
import { schema } from "@/db/schema";  // 👈 import schema object

export const auth = betterAuth({
  emailAndPassword: { enabled: true },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,   // 👈 schema object passed here
  }),
});
