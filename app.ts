import {IPolarisGraphQLServer} from '@enigmatis/polaris';
import {Container} from "inversify";
import {schemaContainer} from "./schema/schema"
import {container} from "@enigmatis/polaris";
import {ContextLogPropertiesWrapper} from "@enigmatis/polaris/dist/logging/ContextLogPropertiesWrapper";
import {LoggerConfiguration, LogPropertiesWrapper, ApplicationLogProperties} from "@enigmatis/polaris-logs";

//TODO: delete these when log properties wrapper is deleted

container.bind<LogPropertiesWrapper>("LogPropertiesWrapper")
    .toConstantValue(new ContextLogPropertiesWrapper())
    .whenTargetNamed("GraphQLLogger");

let mergedContainer = Container.merge(container, schemaContainer);
let server: IPolarisGraphQLServer = mergedContainer.get<IPolarisGraphQLServer>("IPolarisGraphQLServer");

server.start();
