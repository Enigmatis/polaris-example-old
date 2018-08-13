import Polaris = require('@enigmatis/polaris');

let bookInputDef = `
    input BookInput{
        id: ID!        
        title: String,
        author: String
    }
`;

let BookInputWrapper = new Polaris.PolarisTypeWrapper([bookInputDef]);

export {BookInputWrapper as BookInput};
