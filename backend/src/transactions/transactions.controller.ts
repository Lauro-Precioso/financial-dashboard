import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Get()
    findAll() {
        return this.transactionsService.findAll();
    }

    @Post()
    async create(@Body() body: { id: number; user_uid: string; description: string; value: number; type: 'expense' | 'income'; category: string; date: string; created_at?: string }) {
        return this.transactionsService.createTransaction(body);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.transactionsService.deleteTransaction({ id });
    }

}