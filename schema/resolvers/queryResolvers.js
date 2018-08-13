"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var books = [
    {
        id: 1,
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        id: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];
var resolvers = {
    Query: { books: function () { return books; } },
};
exports.resolvers = resolvers;
//# sourceMappingURL=queryResolvers.js.map