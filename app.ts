import {PolarisGraphQLServer} from '@enigmatis/polaris';
import { Schema } from './schema/schema';
import { PolarisLogProperties } from '@enigmatis/polaris-logs';
const props = {
    typeDefs: Schema.def,
    resolvers: Schema.resolvers,
    applicationLogProperties: {
        id: "p01aris-10gs",
        name: "polaris-example",
        repositoryVersion: "v1",
        environment: "dev",
        component: "component"
    }
};
let server = new PolarisGraphQLServer(props);
server.getLogger().info(new PolarisLogProperties("hello world"));
server.start();

// const server = new GraphQLServer({schema: Schema})
// server.start(() => console.log('Server is running on localhost:4000'))
