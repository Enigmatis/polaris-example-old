"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polaris_1 = require("@enigmatis/polaris");
var schema_1 = require("./schema/schema");
polaris_1.RunGraphQLServer(schema_1.Schema, 3000);
//# sourceMappingURL=app.js.map