import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ username: string; accessToken: string }> {
    const username = await this.userRepository.validateUserPassword(
      authCredentialsDto,
    );
    if (!username) throw new UnauthorizedException('Invalid credentials');

    //JWT token created after a successful sign in.
    const payload: JwtPayload = { username: username };
    const accessToken = this.jwtService.sign(payload);
    return { username, accessToken };
  }

  me(accessToken: string): string {
    try {
      const username = this.jwtService.verify(accessToken);
      return username;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async getUser(username: string):Promise<User> {
    const found = await this.userRepository.findOne({
      where: { username: username },
      relations:["articles"]
    });
    if (!found) {
      throw new NotFoundException(`User with username "${username}" not found`);
    }
    return found;
  }
}
