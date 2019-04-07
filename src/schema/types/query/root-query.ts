export const Query = `type Query {
                        books: [Book]
                        booksStartsWith(startsWith:String!): [Book]
                      }`;
