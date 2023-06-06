import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ type: Date, description: 'The creation date of the user' })
  public createdAt: Date;

  @ApiProperty({
    type: Date,
    nullable: true,
    description: 'The deletion date of the user',
  })
  public deletedAt: Date;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'The email of the user',
  })
  public email: string;

  @ApiProperty({ example: 1, description: 'The ID of the user' })
  public id: number;

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  public name: string;

  @ApiProperty({ type: Date, description: 'The last update date of the user' })
  public updatedAt: Date;
}
