import {merge} from 'lodash';
// Get the Query Root object
import {Query} from './entities/query/rootQuery';
// Get the Mutation Root object
import {Mutation} from './entities/mutation/rootMutation';

import {CommonEntities} from '@enigmatis/polaris'


// Create the schema definition
let schemaDefinition = `schema {query: Query, mutation: Mutation}`;

// Create the schema mutationResolvers

// let SchemaWrapper = new Polaris.PolarisTypeWrapper([schemaDefinition, ...Query.typeDefs, ...Mutation.typeDefs], resolvers, Query.schemaDirectives);

// Export an executable polaris schema
export const Schema = {
    def: [schemaDefinition, ...Query.def, ...Mutation.def, CommonEntities.commonEntityInterface.prototype.definition()],
    resolvers: {...Query.resolvers, ...Mutation.resolvers}
};

