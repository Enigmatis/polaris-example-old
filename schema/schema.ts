import "reflect-metadata"
import glob = require('glob');
import path = require('path');
import {ISchemaCreator, IPolarisGraphQLServer, InjectableLogger, container} from '@enigmatis/polaris';
import {Container} from "inversify";
import {buildProviderModule} from "inversify-binding-decorators";
import {PolarisLogProperties} from "@enigmatis/polaris-logs/dist/src/PolarisLogProperties";
import {GraphQLLogProperties} from "@enigmatis/polaris/dist/logs/GraphQLLogProperties";

// Require all types and resolvers so they can be injected later
requireAllInFolder(path.join(__dirname, './entities/**/*'));
requireAllInFolder(path.join(__dirname, './resolvers/**/*'));


function requireAllInFolder(pathToDir: string): void {
    let files = glob.sync(pathToDir);
    files.forEach(file => {
        if (file.endsWith('.ts') || file.endsWith('.js')) {
            file = file.replace(/\.[^/.]+$/, "");
            require(file);
        }
    });
}

// Create container
let container2 = new Container({skipBaseClassChecks: true});
container2.load(buildProviderModule());
let container3 = Container.merge(container,container2)
let server: IPolarisGraphQLServer = container.get<IPolarisGraphQLServer>("IPolarisGraphQLServer")
let logger: InjectableLogger = container2.get<InjectableLogger>("InjectableLogger");
let creator: ISchemaCreator = container3.get<ISchemaCreator>("ISchemaCreator");

console.log(creator)
console.log(logger)
console.log(server)
let schema = creator.generateSchema();
console.log(schema)
export {schema as Schema}
export {server, }//logger}