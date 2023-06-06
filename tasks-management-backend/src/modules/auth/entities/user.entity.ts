import { Column, Entity } from 'typeorm';
import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  IsStrongPassword,
} from 'class-validator';

import { BaseEntity } from '../../../shared/entities/base.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @IsString()
  @IsEmail()
  @Column('varchar')
  public email: string;

  @IsString()
  @Column('varchar')
  public name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(15)
  @IsStrongPassword()
  @Column('varchar')
  public password: string;
}
