import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    id: integer('id').primaryKey(), // Firebase ID
    username: text('name').notNull(),
    email: text('email').notNull().unique(),
    avatarUrl: text('avatar_url'),
});

export const schema = {
    users,
};