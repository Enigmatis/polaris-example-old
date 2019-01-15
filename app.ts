import {
    ILogConfig,
    IPolarisGraphQLServer,
    IPolarisServerConfig,
    polarisContainer,
    PolarisMiddleware
} from '@enigmatis/polaris';
import {Container} from "inversify";
import {schemaContainer} from "./schema/schema"
import {ContextLogPropertiesWrapper} from "@enigmatis/polaris/dist/logging/ContextLogPropertiesWrapper";
import {LogConfig} from "./config/LogConfig";
import {PolarisServerConfig} from "./config/PolarisServerConfig";
import {ExampleMiddleware} from "./middleware/example-middleware";

polarisContainer.bind<ILogConfig>("ILogConfig").to(LogConfig);
polarisContainer.bind<IPolarisServerConfig>("IPolarisServerConfig").to(PolarisServerConfig);
polarisContainer.bind<PolarisMiddleware>("PolarisMiddleware").to(ExampleMiddleware);
let mergedContainer = Container.merge(polarisContainer, schemaContainer);
let server: IPolarisGraphQLServer = mergedContainer.get<IPolarisGraphQLServer>("IPolarisGraphQLServer");

server.start();
