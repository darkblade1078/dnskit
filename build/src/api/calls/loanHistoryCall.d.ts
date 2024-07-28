import { Kit } from '../..';
import { LoanHistory } from '../../interfaces/loanHistory';
interface Parameters {
    NationId: number;
}
/**
 * Gets a nation's loan history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {LoanHistory[]} The loan history of a nation
 */
export default function loanHistoryCall(this: Kit, params: Parameters): Promise<LoanHistory[]>;
export {};
