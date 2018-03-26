const Polaris = require('./polaris');

Polaris.startGraphQLServer(require('./schema/schema'), 3000);