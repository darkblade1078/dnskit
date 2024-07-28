"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kit = void 0;
const api_1 = __importDefault(require("./api"));
class Kit extends api_1.default {
    constructor() {
        super(...arguments);
        this.apiKey = '';
    }
    setKey(apiKey) {
        this.apiKey = apiKey;
    }
}
exports.Kit = Kit;
const kit = new Kit();
exports.default = kit;
//# sourceMappingURL=index.js.map