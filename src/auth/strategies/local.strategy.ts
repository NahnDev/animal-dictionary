import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from '../auth.service';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    return await this.authService.validate(username, password);
  }
}
