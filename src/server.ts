import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentTypeResolver } from "./resolvers/appointment-resolver";
import path from 'node:path';

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [
            AppointmentTypeResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server  = new ApolloServer({
        schema,
    })

    const {url} = await server.listen();

    console.log(`HTTP server running on ${url}`)
}

bootstrap()