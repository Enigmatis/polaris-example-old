import {
    GraphQLServer,
    LoggerConfig,
    POLARIS_TYPES,
    polarisContainer,
    Middleware,
    PolarisServerConfig,
    HeaderConfig
} from '@enigmatis/polaris';
import { Container } from 'inversify';
import { ExampleLogConfig } from './config/example-log-config';
import { ExampleServerConfig } from './config/example-server-config';
import { ExampleMiddleware } from './middleware/example-middleware';
import { schemaContainer } from './schema/schema';
import {ExampleHeadersConfig} from "./config/example-headers-config";

polarisContainer.bind<LoggerConfig>(POLARIS_TYPES.LoggerConfig).to(ExampleLogConfig);
polarisContainer
    .bind<PolarisServerConfig>(POLARIS_TYPES.PolarisServerConfig)
    .to(ExampleServerConfig);
polarisContainer
    .bind<HeaderConfig>(POLARIS_TYPES.HeaderConfig)
    .to(ExampleHeadersConfig);
polarisContainer.bind<Middleware>(POLARIS_TYPES.Middleware).to(ExampleMiddleware);
const mergedContainer = Container.merge(polarisContainer, schemaContainer);
const server: GraphQLServer = mergedContainer.get<GraphQLServer>(POLARIS_TYPES.GraphQLServer);

server.start();
