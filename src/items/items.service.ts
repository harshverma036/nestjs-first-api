import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find({});
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findById(id);
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id);
  }

  async update(id: string, data: Item): Promise<any> {
    const item = await this.itemModel.findById(id);
    if (item) {
      item.name = data.name || item.name;
      item.qty = data.qty || item.qty;
      item.description = data.description || item.description;
      return await item.save();
    } else {
      return {
        errorCode: 1,
        message: 'data not found',
        success: true,
      };
    }
  }
}
