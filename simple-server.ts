import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from 'node:crypto';

/**
 * Schema First
 */

const typeDefs = gql`

    type User {
        id: String!
        name: String!
    }

    type Query {
        users: [User!]!
    }

    type Mutation {
        createUser(name: String!): User!
    }
`

const users: User[] = [];

interface User {
    id: String;
    name: String;
}

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            users: () => {
                return users
            }
        },
        Mutation: {
            createUser: (_, args, ctx) => {
                const user = {
                    id: randomUUID(),
                    name: args.name,
                };
                users.push(user)
                return user
            }
        }
    } 
})

server.listen().then(({url}) => {
    console.log(`HTTP server running on ${url}`)
})