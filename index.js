import mongo from "./lib/mongo";
import { generateModel } from './lib/mongo';

export const mongoInit = async (options) => {
    try {
        const start = await mongo(options);
        console.log(start);
    } catch(e) {
        throw e;
    }
};

export const redisInit = () => {
    
};

const option = {
    url: "mongodb://localhost:27017",
    collection: "test",
}
