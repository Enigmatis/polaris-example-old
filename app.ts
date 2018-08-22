import {PolarisGraphQLServer} from '@enigmatis/polaris';
import {Schema} from './schema/schema';

const props = {
    typeDefs:Schema.def,
    resolvers:Schema.resolvers,
    playground:"/"
};

let server = new PolarisGraphQLServer(props);
server.start(null);