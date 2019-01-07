import {PolarisGraphQLServer} from '@enigmatis/polaris';
import {Schema, logger, server} from './schema/schema'
import {GraphQLLogProperties} from "@enigmatis/polaris/dist/logs/GraphQLLogProperties";
const props = {
    typeDefs: Schema.def,
    resolvers: Schema.resolvers
};
console.log(props)
logger.info(new GraphQLLogProperties("jjj"))
let server2 = new PolarisGraphQLServer();

//server.getLogger().info(new PolarisLogProperties("hello world"));
server.start();

// const server = new GraphQLServer({schema: Schema})
// server.start(() => console.log('Server is running on localhost:4000'))
