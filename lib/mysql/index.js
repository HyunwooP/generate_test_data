import mysql from "mysql";
import { errorHendler, finishHendler } from "../common";
import userSchema from "./schema";

export default async (options) => {

    if (!options.table) errorHendler("not exist table param");

    try {
        const count = options.count || 10;
        const my = await mysql.createConnection(options);
        
        my.connect();

        const schema = userSchema();
        const keys = Object.keys(schema);

        if (keys.length < 1) errorHendler("not exist schema");

        for (let i = 0; i < count; i++) {
            
            let sql = `insert into ${options.table} (`;

            // add field
            for (let j = 0; j < keys.length; j++) {
                if (j === keys.length - 1) sql += `${keys[j]}`;
                else sql += `${keys[j]}, `;
            }

            sql += ") values (";
            let params = "";

            // add values
            for (let k = 0; k < keys.length; k++) {
                const field = keys[k];

                if (typeof schema[field].prototype.constructor() === "string") params += `'test_data-${i}',`;
                if (typeof schema[field].prototype.constructor() === "number") params += `${i},`;
                if (typeof schema[field].prototype.constructor() === "boolean") params += `${true},`;

                // 맨 마지막 쉼표 제거
                if (k === keys.length - 1) params = params.replace(/,$/g, "");
            }
            
            sql += `${params})`;

            await my.query(sql);
            sql = "";
            params = "";
        }

        return my.end();
            
    } catch(e) {
        errorHendler(e);
    }

}