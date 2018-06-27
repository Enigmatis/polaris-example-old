"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var mutationResolvers = require("../../resolvers/mutationResolvers");
var bookInput_1 = require("../input/bookInput");
var book_1 = require("../output/book");
var Polaris = require("@enigmatis/polaris");
var mutationDef = "\n    type Mutation {\n        updateBook(book: BookInput!): Book \n    }";
var MutationWrapper = new Polaris.PolarisTypeWrapper([mutationDef].concat(book_1.Book.typeDefs, bookInput_1.BookInput.typeDefs), lodash_1.merge(mutationResolvers));
exports.Mutation = MutationWrapper;
//# sourceMappingURL=rootMutation.js.map