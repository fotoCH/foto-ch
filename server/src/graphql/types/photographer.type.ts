import 'reflect-metadata';

import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Photographer {
  // @ts-ignore
  @Field(type => Int)
  public id!: number;

  @Field()
  public firstname!: string;

  @Field()
  public lastname!: string;
}
