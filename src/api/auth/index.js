/**
 * @param {import('fastify').FastifyInstance} fastify
 */
export default async function authRoute(fastify, options) {
    fastify.get('/login', async () => ({ retcode: 1, msg: "Login endpoint works.", data: null }));
    fastify.get('/register', async () => ({ retcode: 1, msg: "Register endpoint works.", data: null }));

    fastify.post('/login', async () => ({ retcode: 1, msg: "Login endpoint POST works.", data: null }));
    fastify.post('/register', async () => ({ retcode: 1, msg: "Register endpoint POST works.", data: null }));
}