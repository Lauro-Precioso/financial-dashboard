import { drizzle } from "drizzle-orm/libsql";

export const db = drizzle("file:../sqlite.db");
(db as any).pragma('foreign_keys = ON'); // Enable foreign key constraints