import mongo from "./lib/mongo";
import redis from "./lib/redis";
import mysql from "./lib/mysql";
import { errorHendler } from "./lib/common";
import { mongoOption, redisOption, mysqlOption } from "./lib/common/const";

export const init = async (type) => {

    let start;

    try {
        switch (type) {
            case "mongo" : start = await mongo(mongoOption);
                break;
            case "redis" : start = await redis(redisOption);
                break;
            case "mysql" : start = await mysql(mysqlOption);
                break;
            default : start = await mongo(mongoOption);
        }

        console.log(start);
    } catch(e) {
        throw e;
    }
}

init("mysql");