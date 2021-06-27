import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signIn')
  signIn(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<{ username: string; accessToken: string }> {
    return this.authService.signIn(authcredentialsDto);
  }

  @Post('/me')
  me(@Body('accessToken') accessToken: string): string {
    return this.authService.me(accessToken);
  }

  @Get('/:username')
  getUser(@Param('username') username: string): Promise<User> {
    return this.authService.getUser(username);
  }
}
