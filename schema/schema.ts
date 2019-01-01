import "reflect-metadata"
import glob = require('glob');
import path = require('path');
import {ISchemaCreator} from '@enigmatis/polaris';
import {Container} from "inversify";
import {buildProviderModule} from "inversify-binding-decorators";

// Require all types and resolvers so they can be injected later
requireAllInFolder(path.join(__dirname, './entities/**/*'));
requireAllInFolder(path.join(__dirname, './resolvers/**/*'));


function requireAllInFolder(pathToDir: string): void {
    let files = glob.sync(pathToDir);
    files.forEach(file => {
        if (file.endsWith('.js')) {
            file = file.replace(/\.[^/.]+$/, "");
            require(file);
        }
    });
}

// Create container
let container = new Container();
container.load(buildProviderModule());

let creator: ISchemaCreator = container.get<ISchemaCreator>("ISchemaCreator");

let schema = creator.generateSchema();

export {schema as Schema}