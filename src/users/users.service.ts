import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  public users: User[] = [
    {
      id: 1001,
      userName: 'one',
      email: 'one@gmail.com',
      password: 'onepassword',
    },
    {
      id: 1002,
      userName: 'two',
      email: 'two@gmail.com',
      password: 'twopassword',
    },
    {
      id: 1003,
      userName: 'three',
      email: 'three@gmail.com',
      password: 'threepassword',
    },
  ];

  getUserByUserName(userName: string): User {
    return this.users.find((el) => el.userName === userName);
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
