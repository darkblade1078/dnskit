import { Kit } from '../..';
import { EquipmentTransactionHistory } from '../../interfaces/equipmentTransactionHistory';
interface Parameters {
    NationId: number;
}
/**
 * Gets a member's equipment transaction history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {EquipmentTransactionHistory[]} The member's equipment transaction history
 */
export default function memberEquipmentTransactionHistoryCall(this: Kit, params: Parameters): Promise<EquipmentTransactionHistory[]>;
export {};
