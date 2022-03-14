import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, plainToInstance } from 'class-transformer';
import { USER_ROLE } from 'src/enum/USER_ROLE';
import { ExposeId } from 'src/helper/expose-id.decorator';

@Schema()
export class User {
  @ExposeId()
  @ApiProperty()
  _id: string;

  @Exclude({ toPlainOnly: true })
  @ApiProperty()
  @Prop({ type: String, required: true, unique: true })
  username: string;

  @ApiProperty()
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Exclude({ toPlainOnly: true })
  @ApiProperty()
  @Prop({ type: String, required: true, unique: true })
  password: string;

  @ApiProperty()
  @Prop({ type: String, enum: USER_ROLE, default: USER_ROLE.VIEWER })
  role: USER_ROLE;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.methods.toJSON = function (): User {
  return plainToInstance(User, this.toObject());
};
