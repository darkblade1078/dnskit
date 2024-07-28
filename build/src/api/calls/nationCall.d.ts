import { Kit } from '../..';
import { Nation } from '../../interfaces/nation';
interface Parameters {
    NationId: number;
}
/**
 * Gets a nation's data
 * @param {Parameters} params Query parameters to customize your results
 * @returns {Nation} The nation's data
 */
export default function nationCall(this: Kit, params: Parameters): Promise<Nation>;
export {};
