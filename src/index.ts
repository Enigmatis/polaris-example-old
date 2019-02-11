import { MongooseConnection } from '@enigmatis/mongo-driver';
import {
    GraphqlLogger,
    GraphQLServer,
    HeaderConfig,
    LoggerConfig,
    Middleware,
    POLARIS_TYPES,
    polarisContainer,
    PolarisServerConfig,
} from '@enigmatis/polaris';
import { config } from 'dotenv';
import { Container } from 'inversify';
import { ExampleHeadersConfig } from './config/example-headers-config';
import { ExampleLogConfig } from './config/example-log-config';
import { ExampleServerConfig } from './config/example-server-config';
import { BookRepository } from './dal/book-repository';
import { ExampleMiddleware } from './middleware/example-middleware';
import { schemaContainer } from './schema/schema';
config();

polarisContainer.bind<LoggerConfig>(POLARIS_TYPES.LoggerConfig).to(ExampleLogConfig);
polarisContainer
    .bind<PolarisServerConfig>(POLARIS_TYPES.PolarisServerConfig)
    .to(ExampleServerConfig);
polarisContainer.bind<HeaderConfig>(POLARIS_TYPES.HeaderConfig).to(ExampleHeadersConfig);
polarisContainer.bind<Middleware>(POLARIS_TYPES.Middleware).to(ExampleMiddleware);
const mergedContainer = Container.merge(polarisContainer, schemaContainer);
const server: GraphQLServer = mergedContainer.get<GraphQLServer>(POLARIS_TYPES.GraphQLServer);

server.start();

const testDB = async () => {
    const logger = mergedContainer.get<GraphqlLogger>(POLARIS_TYPES.GraphqlLogger);
    const connectionString = process.env.MONGO_CONNECTION_STRING;
    if (connectionString) {
        const mongoConnection = new MongooseConnection(
            { connectionString, waitUntilReconnectInMs: 5000 },
            logger as any,
        );
        await mongoConnection.initConnection();
        const repository = new BookRepository();
        logger.info(JSON.stringify(await repository.findAll(12, true), null, 4));
        await mongoConnection.closeConnection();
    } else {
        logger.error(`environment variable 'MONGO_CONNECTION_STRING' not found`);
    }
};

testDB();
