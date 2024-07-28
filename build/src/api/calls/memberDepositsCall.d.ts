import { Kit } from '../..';
import { MemberDeposits } from '../../interfaces/memberDeposits';
/**
 * Gets the deposits of your members
 * @returns {MemberDeposits[]} Your member's deposits
 */
export default function memberDepositsCall(this: Kit): Promise<MemberDeposits[]>;
