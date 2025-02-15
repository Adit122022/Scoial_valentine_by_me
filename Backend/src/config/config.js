const _config= {
    PORT : process.env.PORT,
    MONGO_URL : process.env.MONGO_URL,
    JWT_SECRET_KEY :process.env.JWT_SECRET_KEY,
}

const config = Object.freeze(_config);

module.exports = config;