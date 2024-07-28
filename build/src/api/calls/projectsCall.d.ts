import { Kit } from '../..';
import { Projects } from '../../interfaces/projects';
interface Parameters {
    NationId: number;
}
/**
 * Gets a nation's projects
 * @param {Parameters} params Query parameters to customize your results
 * @returns {Projects} The war's action history
 */
export default function projectsCall(this: Kit, params: Parameters): Promise<Projects>;
export {};
