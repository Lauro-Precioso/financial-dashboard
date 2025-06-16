import { Injectable } from "@nestjs/common";
import { drizzleDb } from "src/db/drizzle";
import { users } from '../db/schema';

@Injectable()
export class UsersService {
    async findAll() {
        return drizzleDb.select().from(users).all();
    }

    async create(data: { username: string; email: string; avatarUrl: string }) {
        await drizzleDb.insert(users).values(data).run();
    }
}