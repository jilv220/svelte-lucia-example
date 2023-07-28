import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = "postgres://admin:passwd@0.0.0.0:5432/admin"
export const sql = postgres(connectionString, { max: 1 })
export const db = drizzle(sql);
