import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import { schema } from './schema';

const sqlite = new Database('sqlite.db')

export const drizzleDb = drizzle(sqlite, { schema });

// Para rodar migrações automaticamente
migrate (drizzleDb, { migrationsFolder: 'drizzle' });