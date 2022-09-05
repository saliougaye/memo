import * as trpc from '@trpc/server';
import { addMemoSchema } from '../../common/validation/memo';
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
        input: addMemoSchema,
        resolve: async ({ input, ctx }) => {
            const { title, description, reminder, notify, category } = input;

            let categoryId: string | undefined = category?.id ?? undefined; 

            if(category && !category.id && category.name && category.color) {
                
                const newCategory = await ctx.prisma.category.create({
                    data: {
                        name: category.name,
                        color: category.color
                    }
                });


                categoryId = newCategory.id;

            }
            

            const memoCreated = await ctx.prisma.memo.create({
                data: {
                    title: title,
                    description: description ?? '',
                    reminder: reminder,
                    notify: notify,
                    categoryId: categoryId
                }
            })
            
            return memoCreated;
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