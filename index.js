import mongo from "./lib/mongo";
import redis from "./lib/redis";
import { errorHendler } from "./lib/common";

export const init = async (options) => {
    
    if (!options.type) errorHendler("please confirm your db type");

    let start;

    try {
        switch (options.type) {
            case "mongo" : start = await mongo(options);
                break;
            case "redis" : start = await redis(options);
                break;
            default : start = await mongo(options);
        }

        console.log(start);
    } catch(e) {
        throw e;
    }
}


const option = {
    type: "redis",
    host: "127.0.0.1",
    port: 6379
}

init(option);