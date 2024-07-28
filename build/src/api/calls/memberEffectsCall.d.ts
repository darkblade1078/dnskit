import { Kit } from '../..';
import { MemberEffects } from '../../interfaces/memberEffects';
/**
 * Gets the effects of your members
 * @returns {MemberEffects[]} Your member's effects
 */
export default function memberEffectsCall(this: Kit): Promise<MemberEffects[]>;
