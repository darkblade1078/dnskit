import { Kit } from '../..';
import { MemberMilitary } from '../../interfaces/memberMilitary';
/**
 * Gets your member's military
 * @returns {MemberMilitary[]} Your member's military
 */
export default function memberMilitaryCall(this: Kit): Promise<MemberMilitary[]>;
