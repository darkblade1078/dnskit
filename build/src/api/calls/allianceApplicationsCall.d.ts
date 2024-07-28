import { Kit } from '../..';
import { AllianceApplication } from '../../interfaces/allianceApplication';
/**
 * Gets a list of current applications
 * @returns {AllianceApplication[]} The list of applications from the api key's alliance
 */
export default function allianceApplicationsCall(this: Kit): Promise<AllianceApplication[]>;
