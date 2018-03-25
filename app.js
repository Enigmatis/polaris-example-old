const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const schema = require('./schema/schema');

// initialize the app
const app = express();

// create endpoints
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

// run server
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});
