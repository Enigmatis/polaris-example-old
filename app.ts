import {
    ILogConfig,
    IPolarisGraphQLServer,
    IPolarisServerConfig, POLARIS_TYPES,
    polarisContainer,
    PolarisMiddleware
} from '@enigmatis/polaris';
import {Container} from "inversify";
import {schemaContainer} from "./schema/schema"
import {LogConfig} from "./config/LogConfig";
import {PolarisServerConfig} from "./config/PolarisServerConfig";
import {ExampleMiddleware} from "./middleware/example-middleware";

polarisContainer.bind<ILogConfig>(POLARIS_TYPES.ILogConfig).to(LogConfig);
polarisContainer.bind<IPolarisServerConfig>(POLARIS_TYPES.IPolarisServerConfig).to(PolarisServerConfig);
polarisContainer.bind<PolarisMiddleware>(POLARIS_TYPES.PolarisMiddleware).to(ExampleMiddleware);
let mergedContainer = Container.merge(polarisContainer, schemaContainer);
let server: IPolarisGraphQLServer = mergedContainer.get<IPolarisGraphQLServer>(POLARIS_TYPES.IPolarisGraphQLServer);

server.start();
