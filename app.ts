import {ILogConfig, IPolarisGraphQLServer, IPolarisServerConfig} from '@enigmatis/polaris';
import {Container} from "inversify";
import {schemaContainer} from "./schema/schema"
import {polarisContainer} from "@enigmatis/polaris";
import {ContextLogPropertiesWrapper} from "@enigmatis/polaris/dist/logging/ContextLogPropertiesWrapper";
import {LogPropertiesWrapper} from "@enigmatis/polaris-logs";
import {LogConfig} from "./config/LogConfig";
import {PolarisServerConfig} from "./config/PolarisServerConfig";

//TODO: delete these when log properties wrapper is deleted

polarisContainer.bind<LogPropertiesWrapper>("LogPropertiesWrapper")
    .toConstantValue(new ContextLogPropertiesWrapper())
    .whenTargetNamed("GraphQLLogger");

polarisContainer.bind<ILogConfig>("ILogConfig").to(LogConfig)
polarisContainer.bind<IPolarisServerConfig>("IPolarisServerConfig").to(PolarisServerConfig)
let mergedContainer = Container.merge(polarisContainer, schemaContainer);
let server: IPolarisGraphQLServer = mergedContainer.get<IPolarisGraphQLServer>("IPolarisGraphQLServer");

server.start();
