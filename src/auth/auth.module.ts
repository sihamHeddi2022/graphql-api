import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from "@nestjs/jwt";
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth.strategy';

@Module({
  imports: [UserModule, PassportModule,
    JwtModule.register({
      secret: "khra",
      signOptions: { expiresIn: '22m' },
    }),],

  providers: [AuthService, AuthResolver,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
