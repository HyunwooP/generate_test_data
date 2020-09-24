import mongo from "./lib/mongo";
import redis from "./lib/redis";
import { generateModel } from "./lib/mongo";

let start;

export const mongoInit = async (options) => {
    try {
        start = await mongo(options);
        console.log(start);
    } catch(e) {
        throw e;
    }
};

export const redisInit = async (options) => {
    try {
        start = await redis(options);
        console.log(start);
    } catch(e) {
        throw e;
    }
};

const option = {
    host: "127.0.0.1",
    port: 6379
}

redisInit(option);