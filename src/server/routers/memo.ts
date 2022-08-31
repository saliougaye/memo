import * as trpc from '@trpc/server';
import { createRouter } from "../create-router";


export const memoRouter = createRouter()
    .query('all', {
        resolve: async ({ input, ctx }) => {
            const memos = await ctx.prisma.memo.findMany({
                include: {
                    category: true
                }
            });

            return memos;
        }
    })
    .mutation('add', {
        resolve: async ({ input, ctx }) => {
            throw new trpc.TRPCError({
                code: "BAD_REQUEST",
                message: "Method not implemented"
            })
        }
    })
    .mutation('edit', {
        resolve: async ({ input, ctx }) => {
            throw new trpc.TRPCError({
                code: "BAD_REQUEST",
                message: "Method not implemented"
            })
        }
    })
    .mutation('delete', {
        resolve: async ({ input, ctx }) => {
            throw new trpc.TRPCError({
                code: "BAD_REQUEST",
                message: "Method not implemented"
            })
        }
    })