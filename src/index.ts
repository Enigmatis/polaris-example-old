import { initConnection } from '@enigmatis/mongo-driver';
import {
    GraphQLServer,
    LoggerConfig,
    Middleware,
    MiddlewaresConfig,
    POLARIS_TYPES,
    polarisContainer,
    PolarisServerConfig,
} from '@enigmatis/polaris';
import { GraphqlLogger } from '@enigmatis/utills';
import { config } from 'dotenv';
import { Container } from 'inversify';
import { ExampleLogConfig } from './config/example-log-config';
import { ExampleMiddlewaresConfig } from './config/example-middlewares-config';
import { ExampleServerConfig } from './config/example-server-config';
import { ExampleMiddleware } from './middleware/example-middleware';
import { schemaContainer } from './schema/schema';

config();

polarisContainer.bind<LoggerConfig>(POLARIS_TYPES.LoggerConfig).to(ExampleLogConfig);
polarisContainer
    .bind<PolarisServerConfig>(POLARIS_TYPES.PolarisServerConfig)
    .to(ExampleServerConfig);
polarisContainer
    .bind<MiddlewaresConfig>(POLARIS_TYPES.MiddlewaresConfig)
    .to(ExampleMiddlewaresConfig);
polarisContainer.bind<Middleware>(POLARIS_TYPES.Middleware).to(ExampleMiddleware);
const mergedContainer = Container.merge(polarisContainer, schemaContainer);
const server: GraphQLServer = mergedContainer.get<GraphQLServer>(POLARIS_TYPES.GraphQLServer);

const init = async () => {
    const logger = mergedContainer.get<GraphqlLogger<any>>(POLARIS_TYPES.GraphqlLogger);
    const connectionString = process.env.MONGO_CONNECTION_STRING;
    if (connectionString) {
        await initConnection({ connectionString, waitUntilReconnectInMs: 5000 }, logger as any);
        server.start();
    } else {
        logger.error(`environment variable 'MONGO_CONNECTION_STRING' not found`);
        process.exit(1);
    }
};

init();
