import { Kit } from '../..';
import { LastPoliciesRan } from '../../interfaces/lastPoliciesRan';
interface Parameters {
    NationId: number;
}
/**
 * Gets a member's last policies
 * @param {Parameters} params Query parameters to customize your results
 * @returns {Equipment} The member's last policies
 */
export default function memberPolicyLastRan(this: Kit, params: Parameters): Promise<LastPoliciesRan>;
export {};
