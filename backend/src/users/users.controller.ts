import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    async create(@Body() body: { uid: string; username: string; email: string; avatarUrl: string }) {
        return this.usersService.createUser(body);
    }
}