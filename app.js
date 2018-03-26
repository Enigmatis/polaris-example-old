const Polaris = require('@vulcan/polaris');
const Schema = require('./schema/schema');
Polaris.startGraphQLServer(Schema, 3000);