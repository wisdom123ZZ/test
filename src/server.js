const Hapi = require("@hapi/hapi");
const filepaths = require('filepaths');
const laabrRegister = require('/home/admin1/Dev/test/src/plugin/laabr.js');
const swaggerRegister = require('/home/admin1/Dev/test/src/plugin/swagger.js')
const basic = require('@hapi/basic')
const {getServerConfigs, getSwaggerConfigs} = require("./config/config");

const users = {
    test: {
        username: 'test',
        password: '1',
        name: 'test test',
        id: '2133d32a'
    }
};
const validate = async (request, username, password) => {

    const user = users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }

    const isValid = password === user.password;
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};
const init = async () => {
    const serverOptions = getServerConfigs();
    console.log(getServerConfigs())
    const server = Hapi.server({
        port: serverOptions.port,
        host: serverOptions.host,
        routes: {
            cors: {
                origin: ['*'] // an array of origins or 'ignore'
            }
        }
    });
    await server.register(basic);
    server.auth.strategy('simple', 'basic', { validate });
        await server.register(require('../src/routes/game').plugin);

    try {

        await swaggerRegister.register(server, getSwaggerConfigs())
        await laabrRegister.register(server);
        await server.start();
    } catch (err) {
        console.error(err);
    }

};

module.exports = {init}