"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
// Get the Query Root object
var rootQuery_1 = require("./entities/query/rootQuery");
// Get the Mutation Root object
var rootMutation_1 = require("./entities/mutation/rootMutation");
var Polaris = require("@enigmatis/polaris");
// Create the schema definition
var schemaDefinition = "schema {query: Query, mutation: Mutation}";
// Create the schema mutationResolvers
var resolvers = lodash_1.merge(rootQuery_1.Query.resolvers, rootMutation_1.Mutation.resolvers);
var SchemaWrapper = new Polaris.PolarisTypeWrapper([schemaDefinition].concat(rootQuery_1.Query.typeDefs, rootMutation_1.Mutation.typeDefs), resolvers, rootQuery_1.Query.schemaDirectives);
exports.Schema = SchemaWrapper;
//# sourceMappingURL=schema.js.map