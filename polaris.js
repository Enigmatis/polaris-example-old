const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const {makeExecutableSchema} = require('graphql-tools');

// initialize the app
function startGraphQLServer(schemaObject) {
    const schema = makeExecutableSchema(schemaObject);
    const app = express();

// create endpoints
    app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
    app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

// run server
    app.listen(3000, () => {
        console.log('Go to http://localhost:3000/graphiql to run queries!');
    });
}

module.exports = {startGraphQLServer: startGraphQLServer};