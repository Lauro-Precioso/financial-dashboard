import { Injectable } from "@nestjs/common";
import { db } from "src/db/drizzle";
import { users } from '../db/schema';

@Injectable()
export class UsersService {
    async findAll() {
        return db.select().from(users).all();
    }

    async createUser(data: { uid: string; username: string; email: string; avatarUrl: string }) {
        console.log('Creating user with data:', data);
        const newData = {
            uid: data.uid,
            username: data.username,
            email: data.email,
            avatarUrl: data.avatarUrl,
        } 
        await db.insert(users).values(newData).run();
        return { message: 'User Created!' }
    }
}