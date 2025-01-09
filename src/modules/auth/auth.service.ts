// src/modules/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 12);
    const user = await this.userService.createUser({
      ...registerDto,
      password: hashedPassword,
    });
    return this.generateToken(user);
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByUsername(loginDto.username);
    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      return this.generateToken(user);
    }
    throw new Error('Invalid credentials');
  }

  private generateToken(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
