import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LibraryModel {
  @Field()
  id: string;

  @Field()
  name: string;
}
