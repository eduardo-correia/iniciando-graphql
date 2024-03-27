import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Customer {
    @Field()
    name: string;

    @Field()
    email: string;
}