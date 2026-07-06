/**
 * @param {import('fastify').FastifyInstance} fastify
 */
export default async function sessionsRoute(fastify, options) {
  fastify.get("/validate", async () => {
    return {
      retcode: 1,
      msg: "Session validation endpoint works.",
      data: null,
    };
  });
}
