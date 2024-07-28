import { Kit } from '../..';
import { BankHistory } from '../../interfaces/bankHistory';
/**
 * Gets the contents of the alliance's bank history
 * @returns {BankHistory[]} The alliance's  bank history of the api key
 */
export default function allianceBankHistoryCall(this: Kit): Promise<BankHistory[]>;
