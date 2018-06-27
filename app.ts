import {GraphQLServer} from 'graphql-yoga'
import {RunGraphQLServer} from '@enigmatis/polaris';
import {Schema} from './schema/schema';
RunGraphQLServer(Schema, 3000);

// const server = new GraphQLServer({schema: Schema})
// server.start(() => console.log('Server is running on localhost:4000'))
