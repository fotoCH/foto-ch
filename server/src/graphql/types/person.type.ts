import 'reflect-metadata';

import { Field, Int, ObjectType } from 'type-graphql';
import { Name } from './name.type';

@ObjectType()
export class Person {
  // @ts-ignore
  @Field(type => Int)
  public id!: number;

  @Field({ nullable: true }) public tel?: string;
  
  // @ts-ignore
  @Field(type => [Name], { nullable: true }) 
  public names?: Name[];
  
  @Field({ nullable: true }) public email?: string;
}
