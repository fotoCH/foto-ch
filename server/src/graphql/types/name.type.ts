import 'reflect-metadata';

import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Name {
  // @ts-ignore
  @Field(type => Int)
  public id!: number;

  // tslint:disable-next-line
  @Field({ nullable: true }) public person_id?: number;

  @Field({ nullable: true }) public firstname?: string;

  @Field({ nullable: true }) public lastname?: string;

  @Field({ nullable: true }) public title?: string;

  @Field({ nullable: true }) public addition?: string;
}
