import {PolarisGraphQLServer} from '@enigmatis/polaris';
import Schema from './schema/schema';
import {Props} from "graphql-yoga/dist/types";

const props = {
    typeDefs: Schema.def,
    resolvers: Schema.resolvers,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
};

let server = new PolarisGraphQLServer(props);
server.start({port: 3000});