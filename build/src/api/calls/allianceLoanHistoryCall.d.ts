import { Kit } from '../..';
import { LoanHistory } from '../../interfaces/loanHistory';
/**
 * Gets your alliance's loan history
 * @returns {LoanHistory[]} The loan history of your alliance
 */
export default function allianceLoanRequestCall(this: Kit): Promise<LoanHistory[]>;
