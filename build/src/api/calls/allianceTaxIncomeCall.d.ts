import { Kit } from '../..';
import { TaxIncome } from '../../interfaces/taxIncome';
/**
 * Gets your alliance's tax income
 * @returns {TaxIncome} The tax income of your alliance
 */
export default function allianceTaxIncomeCall(this: Kit): Promise<TaxIncome>;
