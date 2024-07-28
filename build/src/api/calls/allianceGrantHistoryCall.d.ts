import { Kit } from '../..';
import { GrantHistory } from '../../interfaces/grantHistory';
/**
 * Gets your alliance's grant history
 * @returns {GrantHistory[]} Your alliance's grant history
 */
export default function allianceGrantHistoryCall(this: Kit): Promise<GrantHistory[]>;
