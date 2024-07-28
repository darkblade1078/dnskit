import { Kit } from '../..';
import { WarHistory } from '../../interfaces/warHistory';
interface Parameters {
    NationId: number;
    StartDate?: string;
    StarDateEnd?: string;
    OnlyActive?: boolean;
    OnlyDefensive?: boolean;
    OnlyOffensive?: boolean;
}
/**
 * Gets a nation's war history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {WarHistory[]} The nation's war history
 */
export default function nationWarHistoryCall(this: Kit, params: Parameters): Promise<WarHistory[]>;
export {};
