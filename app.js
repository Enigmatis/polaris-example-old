const {RunGraphQLServer} = require('@vulcan/polaris');
const Schema = require('./schema/schema');
RunGraphQLServer(Schema, 3000);