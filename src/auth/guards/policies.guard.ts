import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { PUBLIC_API_KEY } from 'src/constants/PUBLIC_API_KEY';
import { REQUIRE_ROLE_KEY } from 'src/constants/REQUIRE_ROLE_KEY';
import { USER_ROLE } from 'src/enum/USER_ROLE';
import { User } from 'src/user/schemas/user.schema';
import { JwtGuard } from './jwt.guard';

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtGuard: JwtGuard,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // phan check public
    const publicApi = this.reflector.getAllAndOverride<string>(PUBLIC_API_KEY, [
      context.getClass(),
      context.getHandler(),
    ]);
    if (publicApi) return true;
    // phan check jwt
    if (!(await this.jwtGuard.canActivate(context)))
      throw new HttpException('Please login', 401);
    // phan check role
    const requireRole = this.reflector.getAllAndOverride<USER_ROLE[]>(
      REQUIRE_ROLE_KEY,
      [context.getClass(), context.getHandler()],
    );
    if (!requireRole) return true;

    const req = context.switchToHttp().getRequest() as Request & {
      user: User;
    };
    if (!req.user) throw new HttpException('Please login', 401);

    const user = req.user;
    if (requireRole.includes(user.role)) {
      return true;
    } else
      throw new HttpException(
        `Your role is ${user.role}, but require in ${requireRole.join(' ')}`,
        403,
      );
  }
}
