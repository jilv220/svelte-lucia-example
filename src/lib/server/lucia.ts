import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";
import { sql } from "./db";

export const auth = lucia({
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  adapter: postgresAdapter(sql, {
    // table names here
    user: "users",
    key: "user_keys",
    session: "user_sessions"
  }),
  getUserAttributes: (data) => {
    return {
      name: data.name
    };
  }
});
export type Auth = typeof auth;