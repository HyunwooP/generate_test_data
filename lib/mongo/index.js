import { connect, connection, model, Schema } from 'mongoose';
import { errorHendler } from '../common';
import schema from "./schema";

export default async (options = {}) => {

    if (!options.url) errorHendler("Not existed config");
    if (!options.collection) errorHendler("Not existed collection name");

    try {
        await connect(options.url, options.option);
        
        const count = options.count || 10;
        const getSchema = schema();
        const keys = Object.keys(getSchema);

        if (keys.length < 1) errorHendler("Not existed schema");

        const collection = await model(options.collection, new Schema(getSchema));
        
        for (let i = 0; i < count; i++) {
            const data = new collection();
            
            for (let j = 0; j < keys.length; j++) {
                const field = keys[j];

                if (typeof getSchema[field].prototype.constructor() === "string") data[field] = `test_data ${i}`;
                if (typeof getSchema[field].prototype.constructor() === "number") data[field] = i;
            }
            
            data.save();
        }

        return collection.find({});
    } catch(e) {
        errorHendler(e);
    }
};