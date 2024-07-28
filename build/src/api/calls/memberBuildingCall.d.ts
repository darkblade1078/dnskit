import { Kit } from '../..';
import { MemberBuildings } from '../../interfaces/memberBuildings';
interface Parameters {
    NationId: number;
    info?: boolean;
}
/**
 * Gets a nation's build
 * @param {Parameters} params Query parameters to customize your results
 * @returns {MemberBuildings} The nation's build
 */
export default function memberBuildingsCall(this: Kit, params: Parameters): Promise<MemberBuildings>;
export {};
