import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointmet-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";

@Resolver(Appointment)
export class AppointmentTypeResolver {
    @Query(() => [Appointment])
    async appointments() {
        return [
            {
                startsAt: new Date(),
                endsAt: new Date(),
            }

        ];
    }

    @Mutation(() => Appointment)
    async createAppointment(@Arg('data') data: CreateAppointmentInput) {

        const appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt,
        }
        return appointment;
    }

    @FieldResolver(() => Customer)
    async customer(@Root() appointment: Appointment) {
        console.log(appointment);

        return {
            name: "Eduardo",
            email: "eduardo@eduardo"
        };
    }


}