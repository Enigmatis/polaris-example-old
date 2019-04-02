import { makeExecutablePolarisSchema } from '@enigmatis/polaris';
import { GraphQLSchema } from 'graphql';
import { resolvers } from './resolvers/book-resolvers';
import { Book, BookInput, Mutation, Query, Subscription } from './types/schema-types';

const typesArray = [Book, BookInput, Mutation, Query, Subscription];
const resolversArray = [resolvers];
export const schema: GraphQLSchema = makeExecutablePolarisSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
    resolverValidationOptions: {
        requireResolversForResolveType: false,
    },
});
