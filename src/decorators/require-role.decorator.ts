import { SetMetadata } from '@nestjs/common';
import { REQUIRE_ROLE_KEY } from 'src/constants/REQUIRE_ROLE_KEY';
import { USER_ROLE } from 'src/enum/USER_ROLE';

export const RequireRole = (roles: USER_ROLE[]) =>
  SetMetadata(REQUIRE_ROLE_KEY, roles);
