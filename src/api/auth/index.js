/**
 * @param {import('fastify').FastifyInstance} fastify
 */
export default async function authRoute(fastify, options) {
  fastify.post("/", async () => {
    
  });

  fastify.post("/register", async () => ({
    retcode: 1,
    msg: "Register endpoint POST works.",
    data: null,
  }));
}
