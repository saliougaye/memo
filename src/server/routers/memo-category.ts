import { createRouter } from "../create-router";

export const memoCategoryRouter = createRouter()
    .query('get-categories', {
        resolve: async ({ ctx }) => {

            const memoCategories = await ctx.prisma.category.findMany();

            return memoCategories;
        }
    })