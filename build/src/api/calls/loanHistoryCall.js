"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calls_1 = __importDefault(require("../../services/calls"));
const queryBuilder_1 = __importDefault(require("../../services/queryBuilder"));
/**
 * Gets a nation's loan history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {LoanHistory[]} The loan history of a nation
 */
function loanHistoryCall(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = (0, queryBuilder_1.default)(params);
        const data = yield calls_1.default.makeCall(`NationLoanHistory?APICode=${this.apiKey}${query}`);
        return data;
    });
}
exports.default = loanHistoryCall;
//# sourceMappingURL=loanHistoryCall.js.map