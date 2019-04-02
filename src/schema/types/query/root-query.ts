export const Query = `type Query {
                        books: [Book]
                        booksStartWith(startsWith:String!): [Book]
                      }`;
