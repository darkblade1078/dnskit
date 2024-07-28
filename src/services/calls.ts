import superagent from 'superagent';

class CallService {
    private diplomacyAndStrifeAPIRoot = 'https://diplomacyandstrifeapi.com/api/';

    public async makeCall(endpoint: string) {
        const res = await superagent.get(this.diplomacyAndStrifeAPIRoot + endpoint)
        .accept('json')
        .then()
        .catch((e: Error) => {
            throw new Error(`CallService: Failed to make api call, ${e}`);
        });

        return res.body;
    }

}

export default new CallService();