const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

// initialize the app
function startGraphQLServer (schemaPath){
    const schema = require(schemaPath);
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