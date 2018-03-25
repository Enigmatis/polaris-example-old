const {merge} = require('lodash');
const {makeExecutableSchema} = require('graphql-tools');
// Get the Query Root object
const Query = require('./entities/query/rootQuery');

// Create the schema definition
const SchemaDefinition = `schema {query: Query}`;

// Create the schema resolvers
const resolvers = merge(Query.resolvers);

// Export an executable schema
module.exports = makeExecutableSchema({
    // The schema is a combination of the schema definition, the Query types and the Mutation types
    schemaTypeDefinitions: [SchemaDefinition, ...Query.types],
    resolvers
});
