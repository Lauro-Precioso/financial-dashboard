import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    uid: text('uid').primaryKey(), // Firebase ID
    username: text('name').notNull(),
    email: text('email').notNull().unique(),
    avatarUrl: text('avatar_url'),
});

export const schema = {
    users,
};