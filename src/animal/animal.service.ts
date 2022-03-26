import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITEM_OF_PAGE } from 'src/constants/ITEM_OF_PAGE';
import { User } from 'src/user/schemas/user.schema';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal, AnimalDoc } from './schema/animal.schema';

@Injectable()
export class AnimalService {
  constructor(
    @InjectModel(Animal.name) private readonly animalModel: Model<AnimalDoc>,
  ) {}

  async create(createAnimalDto: CreateAnimalDto, actor: User) {
    const animal = new this.animalModel({...createAnimalDto, createBy: actor._id});
    await animal.save();
    return animal.toJSON();
  }

  async findAll(page = 0, familia?: string, ordo?: string, animalCls?: string) {
    const animalDoc = await this.animalModel
      .find({ familia, ordo, animalCls })
      .skip(page * ITEM_OF_PAGE)
      .limit(ITEM_OF_PAGE);
    return animalDoc.map((doc) => doc.toJSON());
  }

  

  async findOne(id: string) {
    const animalDoc = await this.animalModel.findById(id);
    const animal = animalDoc.toJSON();
    return animal;
  }

  async update(_id: string, updateAnimalDto: UpdateAnimalDto) {
    await this.animalModel.updateOne({ _id }, updateAnimalDto);
    return await this.findOne(_id);
  }

  async remove(_id: string) {
    await this.animalModel.remove({ _id });
  }
}
