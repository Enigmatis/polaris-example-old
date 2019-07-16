export const Mutation = `type Mutation {
                            createBook(book: BookInput!): Book,
                            createBooks(books: [BookInput]!): [Book],
                            updateBook(bookId: String!, update: UpdateBookInput): Book
                         }`;
