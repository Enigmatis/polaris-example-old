"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Mutation: {
        updateBook: function (_, _a) {
            var book = _a.book;
            return { id: book.id, title: book.title, author: book.author };
        }
    }
};
exports.resolvers = resolvers;
//# sourceMappingURL=mutationResolvers.js.map