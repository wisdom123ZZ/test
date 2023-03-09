const joi = require("joi");
const {pool} = require('../libs/db')

const postSchem = joi.object({
    name: joi.string().example('name'),
    count: joi.number().example(1)
});

const delSchem = joi.object({
    name: joi.string().example('name'),
});

exports.plugin = {
    name:'game',
    version:'0.4.0',
    register: async (server,configs)=>{
        server.route({
            method: 'GET',
            options: {
                auth: 'simple'
            },
            path: '/game',
            handler: async function (request, h) {
                return await pool.query('SELECT * FROM BulksAndCows');
            }
        })

        server.route({
            method: ['POST'],
            path: '/game',
            config: {
                handler: async function (request, h) {
                    try {
                        await pool.query("INSERT INTO BulksAndCows(name, count) VALUES (?, ?)",[request.payload.name, request.payload.count]);
                    }
                    catch (e){
                        throw e;
                    }

                    return 1
                },
                validate: {
                    payload: postSchem
                },
                tags: ['api']
            }
        })

        server.route({
            method: ['DELETE'],
            path: '/game',
            config: {
                handler: async function (request, h) {
                    try {
                        await pool.query("DELETE FROM BulksAndCows WHERE name=?",[request.payload.name]);
                    }
                    catch (e){
                        throw e;
                    }

                    return 1
                },
                validate: {
                    payload: delSchem
                },
                tags: ['api'],
            }
        })

        server.route({
            method: ['PUT'],
            path: '/game',
            config: {
                handler: async function (request, h) {
                    try {
                        await pool.query("UPDATE BulksAndCows SET count=? WHERE name=?",[request.payload.count, request.payload.name]);
                    }
                    catch (e){
                        throw e;
                    }

                    return 1
                },
                validate: {
                    payload: postSchem
                },
                tags: ['api'],
            }
        })
    }
}






