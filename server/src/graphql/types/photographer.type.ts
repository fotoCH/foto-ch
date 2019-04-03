import 'reflect-metadata';

import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Photographer {
  // @ts-ignore
  @Field(type => Int)
  public id!: number;

  @Field({ nullable: true }) public tel?: string;
  
  @Field({ nullable: true }) public email?: string;
  // @ts-ignore
  @Field(type => Int, {nullable: true })
  public photographerType?: number;
  
  @Field({ nullable: true }) public genreTypes?: string;
}
