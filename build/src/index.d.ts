import DnsAPI from './api';
export declare class Kit extends DnsAPI {
    apiKey: string;
    setKey(apiKey: string): void;
}
declare const kit: Kit;
export default kit;
