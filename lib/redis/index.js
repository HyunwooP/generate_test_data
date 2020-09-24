import redis from "redis";
import { errorHendler, finishHendler } from '../common';

export default async (options = {}) => {
    
    if (!options.host) errorHendler("Not existed host");
    if (!options.port) errorHendler("Not existed port");

    try {
        const client = await redis.createClient(options);

        const count = options.count || 10;

        for (let i = 0; i < count; i++) {
            client.set(`key${i}`, `test_data${i}`);
        }
        
        return finishHendler("end");
        
    } catch(e) {
        errorHendler(e);
    }
};