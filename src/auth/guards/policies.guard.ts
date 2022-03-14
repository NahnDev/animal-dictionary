import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { REQUIRE_ROLE_KEY } from 'src/constants/REQUIRE_ROLE_KEY';
import { USER_ROLE } from 'src/enum/USER_ROLE';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requireRole = this.reflector.getAllAndOverride<USER_ROLE[]>(
      REQUIRE_ROLE_KEY,
      [context.getClass(), context.getHandler()],
    );
    if (!requireRole) return true;

    const req = context.switchToHttp().getRequest() as Request & {
      user: User;
    };
    if (!req.user) return false;

    const user = req.user;
    if (requireRole.includes(user.role)) {
      return true;
    } else return false;
  }
}
