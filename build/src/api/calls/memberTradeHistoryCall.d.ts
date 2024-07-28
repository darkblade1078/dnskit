import { Kit } from '../..';
import { TradeHistory } from '../../interfaces/tradeHistory';
interface Parameters {
    NationId: number;
}
/**
 * Gets a member's trade history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {TradeHistory[]} The member's trade history
 */
export default function memberTradeHistoryCall(this: Kit, params: Parameters): Promise<TradeHistory[]>;
export {};
