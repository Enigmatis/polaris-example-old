import "reflect-metadata"
import path = require('path');
import {Container} from "inversify";
import {buildProviderModule} from "inversify-binding-decorators";
import {CommonEntityInterface, InjectableType} from '@enigmatis/polaris';
import {requireAllInFolder} from '../utils/RequireAllInFolder'
// Require all types and resolvers so they can be injected later
requireAllInFolder(path.join(__dirname, './entities/**/*'));
requireAllInFolder(path.join(__dirname, './resolvers/**/*'));


// Create container
let schemaContainer = new Container();
schemaContainer.load(buildProviderModule());
schemaContainer.bind<CommonEntityInterface>("CommonEntityInterface").to(CommonEntityInterface);
schemaContainer.bind<InjectableType>("InjectableType").to(CommonEntityInterface);
export {schemaContainer};