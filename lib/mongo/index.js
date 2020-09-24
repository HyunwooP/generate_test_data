import { connect, connection, model, Schema } from 'mongoose';
import { errorHendler } from '../common';
import userSchema from "./schema";

export default async (options = {}) => {

    if (!options.collection) errorHendler("Not existed collection name");

    try {
        const schema = userSchema();
        const keys = Object.keys(schema);

        if (keys.length < 1) errorHendler("Not existed schema");

        await connect(options.url, options.option);
        
        const count = options.count || 10;
        const collection = await model(options.collection, new Schema(schema));
        
        for (let i = 0; i < count; i++) {
            const data = new collection();
            
            for (let j = 0; j < keys.length; j++) {
                const field = keys[j];
                
                if (typeof schema[field].prototype.constructor() === "string") data[field] = `test_data ${i}`;
                if (typeof schema[field].prototype.constructor() === "number") data[field] = i;
                if (typeof schema[field].prototype.constructor() === "boolean") data[field] = true;
                if (typeof schema[field].prototype.constructor() === "object") data[field] = [{ _id: i, test_data: i + 1}];

            }
            
            data.save();
        }

        return collection.find({});
    } catch(e) {
        errorHendler(e);
    }
};