import {PolarisGraphQLServer} from '@enigmatis/polaris';
import {Schema} from './schema/schema';

const props = {
    typeDefs: Schema.def,
    resolvers: Schema.resolvers
};

let server = new PolarisGraphQLServer({
    schema: props
});
server.start();

// const server = new GraphQLServer({schema: Schema})
// server.start(() => console.log('Server is running on localhost:4000'))
