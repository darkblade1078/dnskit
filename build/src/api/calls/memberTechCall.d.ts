import { Kit } from '../..';
import { MemberTech } from '../../interfaces/memberTech';
/**
 * Gets your member's tech
 * @returns {MemberTech[]} All your member's tech
 */
export default function memberTechCall(this: Kit): Promise<MemberTech[]>;
