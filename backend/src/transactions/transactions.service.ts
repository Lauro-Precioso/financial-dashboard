import { Injectable } from "@nestjs/common";
import { db } from "src/db/drizzle";
import { transactions } from '../db/schema';
import { eq } from "drizzle-orm";

@Injectable()
export class TransactionsService {
    async findAll() {
        return db.select().from(transactions).all();
    }

    async createTransaction(data: { id: number; user_uid: string; description: string; value: number; type: 'expense' | 'income'; category: string; date: string; created_at?: string }) {
        console.log('Creating transaction with data:', data);
        const newData = {
            id: data.id,
            user_uid: data.user_uid,
            description: data.description,
            value: data.value,
            type: data.type,
            category: data.category,
            date: data.date,
            created_at: new Date().toISOString(),
        } 
        await db.insert(transactions).values(newData).run();
        return { message: 'Transaction Created!' }
    }

    async deleteTransaction(data: { id: number }) {
        const newData = {
            id: data.id,
        }
        await db.delete(transactions).where(eq(transactions.id, data.id)).run();
        if (!newData.id) {
            throw new Error('Transaction not found');
        }
        return { message: 'Transaction Deleted!' };
    }
}