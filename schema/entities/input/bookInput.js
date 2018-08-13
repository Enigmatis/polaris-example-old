"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Polaris = require("@enigmatis/polaris");
var bookInputDef = "\n    input BookInput{\n        id: ID!        \n        title: String,\n        author: String\n    }\n";
var BookInputWrapper = new Polaris.PolarisTypeWrapper([bookInputDef]);
exports.BookInput = BookInputWrapper;
//# sourceMappingURL=bookInput.js.map