import { makeExecutablePolarisSchema } from '@enigmatis/polaris';
import { GraphQLSchema } from 'graphql';
import { Book, BookInput, Mutation, Query, Subscription } from './types/schema-types';

const typesArray = [Book, BookInput, Mutation, Query, Subscription];
export const schema: GraphQLSchema = makeExecutablePolarisSchema({
    typeDefs: typesArray,
    allowUndefinedInResolve: true,
    resolverValidationOptions: {
        requireResolversForResolveType: false,
    },
});
