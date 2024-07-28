import { Kit } from '../..';
import { BankHistory } from '../../interfaces/bankHistory';
interface Parameters {
    NationId: number;
}
/**
 * Gets a nation's bank history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {BankHistory[]} The bank history of a nation
 */
export default function memberBankHistoryCall(this: Kit, params: Parameters): Promise<BankHistory[]>;
export {};
