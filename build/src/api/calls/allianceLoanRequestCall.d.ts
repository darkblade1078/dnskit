import { Kit } from '../..';
import { AllianceLoanRequest } from '../../interfaces/allianceLoanRequest';
/**
 * Gets a list of loan requests
 * @returns {AllianceLoanRequest[]} The list of loan requests of your alliance
 */
export default function allianceLoanRequestCall(this: Kit): Promise<AllianceLoanRequest[]>;
