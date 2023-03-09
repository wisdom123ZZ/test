
exports.plugin = {
    name:'error',
    version:'0.4.0',
    register: async (server,configs)=>{
        server.route({
            method: '*',
            path: '/',
            handler: function () {
                return '404 Error! Page Not Found!';
            }
        })
    }
}