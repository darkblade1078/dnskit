import { Kit } from '../..';
import { MemberContribution } from '../../interfaces/memberContribution';
/**
 * Gets your member's contributions
 * @returns {MemberContribution[]} All your member's contributions
 */
export default function membersContributionsCall(this: Kit): Promise<MemberContribution[]>;
