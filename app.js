const Polaris = require('@vulcan/polaris');
const Schema = require('./schema/schema');
Polaris.RunGraphQLServer(Schema, 3000);