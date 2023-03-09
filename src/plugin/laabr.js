const register = async (server)=> {
    try {
        return await server.register([{
            plugin: require('laabr'),
            options: {
                formats: {
                    response: ':time[utc] :method :remoteAddress :url :status :payload (:responseTime ms)',
                    onPostStart: ':time[utc] :level :message at: :host[uri]'
                },
                tokens: { start:  () => '[start]' },
                indent: 0,
                colored: true
            }
        }
        ]);
    } catch (err) {
        console.log(`Ошибка при регистрации плагина laabr: ${err}`);
    }
};
module.exports={register};
