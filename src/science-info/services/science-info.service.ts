import { Injectable, NotFoundException } from '@nestjs/common';
import { Science } from '../schemas/science.schema';
import { Model, Document } from 'mongoose';
import { CreateScienceDto } from '../dto/create-science.dto';
import { UpdateScienceDto } from '../dto/update-science.dto';
import { ITEM_OF_PAGE } from 'src/constants/ITEM_OF_PAGE';

@Injectable()
export abstract class ScienceInfoService<T extends Science, D = Document> {
  constructor(protected readonly model: Model<D>) {}

  async create(createDto: CreateScienceDto) {
    const document = new this.model(createDto);
    await document.save();
    return document.toJSON();
  }

  async findAll(page: number) {
    const docs = await this.model
      .find()
      .sort({ name: 1 })
      .skip(page * ITEM_OF_PAGE)
      .limit(ITEM_OF_PAGE);
    return docs.map((doc) => doc.toJSON());
  }
  async findOne(_id: string) {
    const doc = await this.model.findById(_id);
    return doc.toJSON();
  }
  async findWithName(name: string) {
    const doc = await this.model.findOne({ name });
    if (!doc) throw new NotFoundException();
    return doc.toJSON();
  }

  async updateOne(_id: string, updateDto: UpdateScienceDto) {
    await this.model.updateOne({ _id }, updateDto);
    return await this.findOne(_id);
  }
  async removeOne(_id: string) {
    await this.model.remove({ _id });
  }
}
