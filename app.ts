import { schemaContainer } from './schema/schema';
import {
    LogConfig,
    GraphQLServer,
    PolarisServerConfig, POLARIS_TYPES,
    polarisContainer,
    PolarisMiddleware,
} from '@enigmatis/polaris';
import { Container } from 'inversify';
import { ExampleLogConfig } from './config/ExampleLogConfig';
import { ExampleServerConfig } from './config/ExampleServerConfig';
import { ExampleMiddleware } from './middleware/example-middleware';

polarisContainer.bind<LogConfig>(POLARIS_TYPES.LogConfig).to(ExampleLogConfig);
polarisContainer.bind<PolarisServerConfig>(POLARIS_TYPES.PolarisServerConfig).to(ExampleServerConfig);
polarisContainer.bind<PolarisMiddleware>(POLARIS_TYPES.PolarisMiddleware).to(ExampleMiddleware);
let mergedContainer = Container.merge(polarisContainer, schemaContainer);
// (mergedContainer as any)._bindingDictionary._map.forEach(x => {
//     x.forEach(y=>{
//         console.log({ serviceIdentifier: y.serviceIdentifier, implementationType: y.implementationType });
//     })
// });
let server: GraphQLServer = mergedContainer.get<GraphQLServer>(POLARIS_TYPES.GraphQLServer);

server.start();
