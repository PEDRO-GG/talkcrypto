import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

// Custom decorator that gets the user out of the request object
export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
