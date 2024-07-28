import { Kit } from '../..';
import { Equipment } from '../../interfaces/equipment';
interface Parameters {
    NationId: number;
}
/**
 * Gets a member's current equipment
 * @param {Parameters} params Query parameters to customize your results
 * @returns {Equipment} The member's current equipment
 */
export default function memberInventoryCall(this: Kit, params: Parameters): Promise<Equipment[]>;
export {};
