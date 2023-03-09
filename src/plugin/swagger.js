const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');

const register = async (server,configs)=> {
    try {
        return await server.register([
            Inert,
            Vision,
            {
                plugin: require('hapi-swagger'),
                options: configs.swagger
            }
        ]);
    } catch (err) {
        console.log(`Ошибка при регистрации плагина Swagger
: ${err}`);
    }
};
module.exports={register};