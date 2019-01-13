import "reflect-metadata"
import glob = require('glob');
import path = require('path');
import {Container} from "inversify";
import {buildProviderModule} from "inversify-binding-decorators";
import {CommonEntityInterface, container, ILogConfig,IPolarisServerConfig, InjectableType} from '@enigmatis/polaris';
import {LogConfig} from "../config/LogConfig";
import {PolarisServerConfig} from "../config/PolarisServerConfig";

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
let schemaContainer = new Container();
schemaContainer.load(buildProviderModule());
schemaContainer.bind<CommonEntityInterface>("CommonEntityInterface").to(CommonEntityInterface)
schemaContainer.bind<InjectableType>("InjectableType").to(CommonEntityInterface)
container.bind<ILogConfig>("ILogConfig").to(LogConfig)
container.bind<IPolarisServerConfig>("IPolarisServerConfig").to(PolarisServerConfig)
export {schemaContainer}