import authRoute from './auth/index.js';
import sessionsRoute from './sessions/index.js';

/**
 * @param {import('fastify').FastifyInstance} fastify
 */
export default async function apiRoute(fastify, options) {
    fastify.get('/', async () => ({ retcode: -1, msg: "Endpoint not found", data: null }));
    
    fastify.register(sessionsRoute, { prefix: '/sessions' });
    fastify.register(authRoute, { prefix: '/auth' });
}