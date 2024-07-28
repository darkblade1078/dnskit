import { Kit } from '../..';
import { MemberFunds } from '../../interfaces/memberFunds';
/**
 * Gets the funds of your members
 * @returns {MemberFunds[]} Your member's funds
 */
export default function memberFundsCall(this: Kit): Promise<MemberFunds[]>;
