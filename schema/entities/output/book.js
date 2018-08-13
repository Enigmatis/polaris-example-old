"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polaris_1 = require("@enigmatis/polaris");
var lodash_1 = require("lodash");
var Polaris = require("@enigmatis/polaris");
// Define the Book type schema
var bookDef = "\n    type Book implements CommonEntity {\n        id: ID!\n        creationDate: String,\n        lastUpdateDate: String,\n        dataVersion: Int!,\n        title: String @upper,\n        author: String,\n        otherBook: Book\n    }\n";
// Get the Book's mutationResolvers
var resolvers = require('../../resolvers/bookResolvers');
var BookWrapper = new Polaris.PolarisTypeWrapper([bookDef].concat(polaris_1.CommonEntities.commonEntityInterface.typeDefs, polaris_1.CommonEntities.upperCaseDirective.typeDefs), resolvers, lodash_1.merge(polaris_1.CommonEntities.upperCaseDirective.schemaDirectives));
exports.Book = BookWrapper;
//# sourceMappingURL=book.js.map