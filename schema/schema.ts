import {InjectableResolver, InjectableType} from "@enigmatis/polaris";
import {Container} from "inversify";
import {buildProviderModule} from "inversify-binding-decorators";
import {merge} from 'lodash';
import Polaris = require("@enigmatis/polaris");
import "reflect-metadata";

require('./entities/book');
require('./entities/mutation');
require('./entities/book.input');
require('./entities/query');
require('./resolvers/query');
require('./resolvers/mutation');
require('./resolvers/book');

let container = new Container();
container.load(buildProviderModule());

let schemaDefinition = `schema {query: Query, mutation: Mutation}`;
let definitions = [schemaDefinition, ...container.getAll<InjectableType>("InjectableType").map<string>(x => x.definition())];
let resolvers = merge(container.getAll<InjectableResolver>("InjectableResolver").map(x =>
    x.resolver()
));
let schema = new Polaris.PolarisTypeWrapper(definitions, resolvers);
export default schema;