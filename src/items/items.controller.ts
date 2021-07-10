import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() createItemDto: CreateItemDto): string {
    return `Update ${id}, name: ${createItemDto.name}`;
  }

  @Delete(':id')
  deleteOne(@Param('id') id): string {
    return `Item Deleted - ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `name: ${createItemDto.name}, Description: ${createItemDto.description}, Quantity: ${createItemDto.qty}`;
  }
}
