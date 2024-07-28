import { Kit } from '../..';
import { MemberContribution } from '../../interfaces/memberContribution';
interface Parameters {
    NationId: number;
}
/**
 * Gets a member's contribution
 * @param {Parameters} params Query parameters to customize your results
 * @returns {MemberContribution} The nation's contributions
 */
export default function memberContributionCall(this: Kit, params: Parameters): Promise<MemberContribution>;
export {};
