import { sql } from 'drizzle-orm';
import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    uid: text('uid').primaryKey(), // Firebase ID
    username: text('name').notNull(),
    email: text('email').notNull().unique(),
    avatarUrl: text('avatar_url'),
});

export const transactions = sqliteTable('transactions', {
    id: int('id').primaryKey(),
    user_uid: text('user_uid').notNull().references(() => users.uid, {
        onDelete: 'cascade', // Delete transactions when user is deleted
    }),
    description: text('description').notNull(),
    value: real('amount').notNull(),
    type: text('type', { enum: ['expense', 'income'] }).notNull(),
    category: text('category').notNull(),
    date: text('date').notNull(),
    created_at: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  });

export const schema = {
    users,
    transactions
};