import { Kit } from '../..';
import { EquipmentTransactionHistory } from '../../interfaces/equipmentTransactionHistory';
/**
 * Gets the contents of your alliance's equipment transaction history
 * @returns {EquipmentTransactionHistory[]} Your alliance's equipment transaction history
 */
export default function allianceEquipmentTransactionHistoryCall(this: Kit): Promise<EquipmentTransactionHistory[]>;
