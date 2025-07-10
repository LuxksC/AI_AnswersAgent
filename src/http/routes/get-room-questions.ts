import { desc, eq } from 'drizzle-orm';
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const getRoomQuestionsRoute: FastifyPluginCallbackZod = (app) => {
  app.get(
    '/rooms/:roomId/questions',
    {
      schema: {
        // Validação dos parâmetros da rota
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request) => {
      const { roomId } = request.params;

      // Consulta no banco de dados
      const results = await db
        .select({
          id: schema.questions.id,
          question: schema.questions.question,
          answer: schema.questions.answer,
          createdAt: schema.questions.createdAt,
        })
        .from(schema.questions)
        .where(eq(schema.questions.roomId, roomId)) // eq -> Método do Drizzle
        .orderBy(desc(schema.questions.createdAt)); // desc -> Método do Drizzle

      return results;
    }
  );
};
