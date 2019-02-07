import {
    GraphqlLogger,
    GraphQLServer,
    LoggerConfig,
    POLARIS_TYPES,
    polarisContainer,
    PolarisMiddleware,
    PolarisServerConfig,
} from '@enigmatis/polaris';
import { Container } from 'inversify';

import { config } from 'dotenv';

config();
import { ExampleLogConfig } from './config/example-log-config';
import { ExampleServerConfig } from './config/example-server-config';
import { ExampleMiddleware } from './middleware/example-middleware';
import { schemaContainer } from './schema/schema';
import { BookRepository } from './dal/book-repository';
import { MongooseConnection } from '@enigmatis/mongo-driver';

polarisContainer.bind<LoggerConfig>(POLARIS_TYPES.LoggerConfig).to(ExampleLogConfig);
polarisContainer
    .bind<PolarisServerConfig>(POLARIS_TYPES.PolarisServerConfig)
    .to(ExampleServerConfig);
polarisContainer.bind<PolarisMiddleware>(POLARIS_TYPES.PolarisMiddleware).to(ExampleMiddleware);
const mergedContainer = Container.merge(polarisContainer, schemaContainer);
const server: GraphQLServer = mergedContainer.get<GraphQLServer>(POLARIS_TYPES.GraphQLServer);

server.start();

const testDB = async () => {
    const logger = mergedContainer.get<GraphqlLogger>(POLARIS_TYPES.GraphqlLogger);
    const connectionString =
        process.env.MONGO_CONNECTION_STRING;
    if (connectionString) {
        const mongoConnection = new MongooseConnection(
            { connectionString, waitUntilReconnectInMs: 5000 },
            logger,
        );
        await mongoConnection.initConnection();
        const repository = new BookRepository();
        logger.info(JSON.stringify(await repository.findAll(12, true), null, 4));
        await mongoConnection.closeConnection();
    } else {
        logger.error(`enviorment variable 'MONGO_CONNECTION_STRING' not found`);
    }
};

testDB();
