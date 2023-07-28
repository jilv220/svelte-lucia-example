import { bigint, pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  name: text('name'),
})

export const user_keys = pgTable('user_keys', {
  id: text('id').primaryKey(),
  user_id: text('user_id').notNull().references(() => users.id),
  hashed_password: text('hashed_password')
})

export const user_sessions = pgTable('user_sessions', {
  id: text('id').primaryKey(),
  user_id: text('user_id').notNull().references(() => users.id),
  active_expires: bigint('active_expires', { mode: 'number' }).notNull(),
  idle_expires: bigint('idle_expires', { mode: 'number' }).notNull()
})