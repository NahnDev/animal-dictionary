import {
  Injectable,
  NotFoundException,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { hash, compare } from 'bcryptjs';
import { USER_ROLE } from 'src/enum/USER_ROLE';

@Injectable()
export class UserService implements OnApplicationBootstrap {
  // constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.passHash(createUserDto.password);
    const userDoc = new this.userModel(createUserDto);
    await userDoc.save();
    if (!userDoc) return null;
    return userDoc.toJSON();
  }

  async findAll(): Promise<User[]> {
    const userDocs = await this.userModel.find();
    return userDocs.map((doc) => doc.toJSON());
  }

  async findOne(_id: string): Promise<User> {
    const userDoc = await this.userModel.findById(_id);
    return userDoc.toJSON();
  }

  async findWithUsername(username: string): Promise<User> {
    const userDoc = await this.userModel.findOne({ username });
    if (!userDoc) return null;
    return userDoc.toJSON();
  }

  async update(_id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.password)
      updateUserDto.password = await this.passHash(updateUserDto.password);
    await this.userModel.updateOne({ _id }, updateUserDto);
    return await this.findOne(_id);
  }

  async remove(_id: string) {
    await this.userModel.deleteOne({ _id });
  }

  async passHash(data: string): Promise<string> {
    return await hash(data, 1);
  }

  async validAccount(username: string, password: string): Promise<boolean> {
    const user = await this.findWithUsername(username);
    const isValid = await compare(password, user.password);
    return isValid;
  }

  async onApplicationBootstrap() {
    if (!(await this.findWithUsername('root')))
      this.create({
        name: 'root',
        password: '1234',
        username: 'root',
        role: USER_ROLE.ADMIN,
      });
  }
}
