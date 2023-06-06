import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('ACCESS_TOKEN_SECRET'),
    });
  }

  public async validate({
    id,
    email,
  }: Partial<UserDto>): Promise<Partial<UserDto>> {
    return { id, email };
  }
}
