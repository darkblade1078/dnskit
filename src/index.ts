import DnsAPI from './api';

export class Kit extends DnsAPI {
    apiKey = '';

    setKey(apiKey: string): void {
        this.apiKey = apiKey;
    }
}

const kit = new Kit();

export default kit;