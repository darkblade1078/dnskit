import { Kit } from '../..';
import { Equipment } from '../../interfaces/equipment';
/**
 * Gets the contents of the alliance's equipment reserves
 * @returns {Equipment[]} The alliance's bank equipment reserves from the api key
 */
export default function allianceEquipmentCall(this: Kit): Promise<Equipment[]>;
