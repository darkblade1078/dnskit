import { Kit } from '../..';
import { AllianceBank } from '../../interfaces/allianceBank';
/**
 * Gets the contents of the alliance's bank
 * @returns {AllianceBank} The bank contents of the api key's alliance
 */
export default function allianceBankCall(this: Kit): Promise<AllianceBank>;
