import 'reflect-metadata';

import { Field, Int, ObjectType } from 'type-graphql';
import { Name } from './name.type';

@ObjectType()
export class Person {
  // @ts-ignore
  @Field(type => Int)
  public id!: number;

  @Field({ nullable: true }) public awards?: string;

  // @ts-ignore
  @Field(type => [Name], { nullable: true })
  public names?: Name[];

  // tslint:disable-next-line
  @Field({ nullable: true }) public short_bio?: string;
  // TODO: Introduce CamelCase for API
}
