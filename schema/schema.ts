import "reflect-metadata"
import glob = require('glob');
import path = require('path');
import {ISchemaCreator, InjectableLogger, PolarisGraphQLServer, IPolarisGraphQLServer} from '@enigmatis/polaris';
import {Container} from "inversify";
import {buildProviderModule} from "inversify-binding-decorators";

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
let container = new Container({skipBaseClassChecks: true});
container.load(buildProviderModule());

let creator: ISchemaCreator = container.get<ISchemaCreator>("ISchemaCreator");
let logger: InjectableLogger = container.get<InjectableLogger>("InjectableLogger");
let server: IPolarisGraphQLServer = container.get<IPolarisGraphQLServer>("IPolarisGraphQLServer");

let schema = creator.generateSchema();

export {schema as Schema}