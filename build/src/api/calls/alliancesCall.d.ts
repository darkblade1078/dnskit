import { Kit } from '../..';
import { Alliance } from '../../interfaces/alliance';
/**
 * Gets a list of alliances
 * @returns {Alliance[]} The list of alliances
 */
export default function alliancesCall(this: Kit): Promise<Alliance[]>;
