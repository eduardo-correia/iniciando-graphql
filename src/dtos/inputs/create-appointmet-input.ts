import { IsDateString, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {

    @Field()
    @IsString()
    customerId: string;

    @Field()
    @IsDateString()
    startsAt: Date;

    @Field()
    @IsDateString()
    endsAt: Date;

}
