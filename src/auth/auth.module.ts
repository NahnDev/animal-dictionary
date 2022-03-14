import { Module, UseGuards } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtGuard } from './guards/jwt.guard';
import { LocalGuard } from './guards/local.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { PoliciesGuard } from './guards/policies.guard';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ session: false, defaultStrategy: 'local' }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    JwtGuard,
    LocalGuard,
    { provide: APP_GUARD, useClass: PoliciesGuard },
  ],
})
export class AuthModule {}
