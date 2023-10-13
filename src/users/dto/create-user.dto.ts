import { IsInt, IsString } from 'class-validator';
export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  email: string;
}
