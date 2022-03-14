import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/user/schemas/user.schema';

export const RequestUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest() as Request & { user: User };
    return request.user;
  },
);
