import 'reflect-metadata';

import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Contact {
  // @ts-ignore
  @Field(type => Int)
  public id!: number;

  @Field({ nullable: true }) public name?: string;

  @Field({ nullable: true }) public tel?: string;

  @Field({ nullable: true }) public email?: string;

  // @ts-ignore
  @Field(type => Int, { nullable: true })
  public contactType?: number;
}
