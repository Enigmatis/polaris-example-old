"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We use book in our Query object
var Polaris = require("@enigmatis/polaris");
var book_1 = require("../output/book");
var lodash_1 = require("lodash");
var polaris_1 = require("@enigmatis/polaris");
// Get the Query's mutationResolvers
var resolvers = require("../../resolvers/queryResolvers");
// Create the type Query's schema
var queryDef = "type Query {\n books: [Book] @connection }";
var QueryWrapper = new Polaris.PolarisTypeWrapper([queryDef].concat(book_1.Book.typeDefs, polaris_1.CommonEntities.connectionDirective.typeDefs), lodash_1.merge(resolvers, book_1.Book.resolvers), lodash_1.merge(book_1.Book.schemaDirectives, polaris_1.CommonEntities.connectionDirective.schemaDirectives));
exports.Query = QueryWrapper;
//# sourceMappingURL=rootQuery.js.map