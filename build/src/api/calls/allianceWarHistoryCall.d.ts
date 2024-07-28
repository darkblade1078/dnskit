import { Kit } from '../..';
import { WarHistory } from '../../interfaces/warHistory';
interface Parameters {
    AllianceId: number;
    StartDate?: string;
    StarDateEnd?: string;
    OnlyActive?: boolean;
    OnlyDefensive?: boolean;
    OnlyOffensive?: boolean;
}
/**
 * Gets an alliance's war history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {WarHistory[]} The war history of your alliance
 */
export default function allianceWarHistoryCall(this: Kit, params: Parameters): Promise<WarHistory[]>;
export {};
