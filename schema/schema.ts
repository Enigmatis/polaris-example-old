import "reflect-metadata"
import path = require('path');
import {Container} from "inversify";
import {buildProviderModule} from "inversify-binding-decorators";
import {CommonEntityInterface, InjectableType, POLARIS_TYPES} from '@enigmatis/polaris';
import {requireAllInFolder} from '../utils/RequireAllInFolder'
// Require all types and resolvers so they can be injected later
requireAllInFolder(path.join(__dirname, './entities/**/*'));
requireAllInFolder(path.join(__dirname, './resolvers/**/*'));


// Create container
export const schemaContainer = new Container();
schemaContainer.load(buildProviderModule());
schemaContainer.bind<CommonEntityInterface>(POLARIS_TYPES.CommonEntityInterface).to(CommonEntityInterface);
schemaContainer.bind<InjectableType>(POLARIS_TYPES.InjectableType).to(CommonEntityInterface);
