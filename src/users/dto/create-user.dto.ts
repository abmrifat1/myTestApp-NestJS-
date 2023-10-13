import { IsInt, IsString } from 'class-validator';
export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  userName: string;

  @IsString()
  password: string;

  @IsString()
  email: string;
}
