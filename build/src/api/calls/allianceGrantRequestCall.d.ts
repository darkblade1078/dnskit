import { Kit } from '../..';
import { AllianceGrantRequest } from '../../interfaces/allianceGrantRequest';
/**
 * Gets a list of grant requests
 * @returns {AllianceGrantRequest[]} The list of grant requests of your alliance
 */
export default function allianceGrantRequestCall(this: Kit): Promise<AllianceGrantRequest[]>;
