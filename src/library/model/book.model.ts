import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BookModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  lib: string;

  @Field()
  author: number;
}
