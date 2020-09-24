const mongoOption = {
    url: "mongodb://127.0.0.1:27017/test",
    collection: "test",
    count: 10,
    option: {}
};

const redisOption = {
    host: "127.0.0.1",
    port: 6379,
    count: 10
}

const mysqlOption = {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "",
    table: "",
}

export {
    mongoOption,
    redisOption,
    mysqlOption
}
