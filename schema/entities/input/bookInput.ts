import Polaris = require('@enigmatis/polaris');

let bookInputDef = `
    input BookInput{
        id: ID!        
        title: String,
        author: String
    }
`;

export const BookInput = {
    def: [bookInputDef]
};
