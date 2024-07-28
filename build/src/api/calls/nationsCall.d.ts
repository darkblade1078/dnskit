import { Kit } from '../..';
import { Nation } from '../../interfaces/nation';
/**
 * Gets every nation
 * @returns {Nation[]} All the nation data
 */
export default function nationsCall(this: Kit): Promise<Nation[]>;
