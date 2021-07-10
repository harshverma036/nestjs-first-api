import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '8973298478',
      name: 'Item One',
      qty: 10,
      description: 'This is description item 1',
    },
    {
      id: '8973298478',
      name: 'Item Two',
      qty: 10,
      description: 'This is description item 2',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
