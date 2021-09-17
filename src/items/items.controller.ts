import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemsService } from './items.service'
import { Item } from '../item';
import { Items } from '../items';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService) {}

    @Get()
    async findAll(): Promise<Items>{
        return this.itemsService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: number): Promise<Item> {
        return this.itemsService.find(id);
    }

    @Post()
    async create(@Body('item') item: Item): Promise<void> {
        this.itemsService.create(item);
    }
}
