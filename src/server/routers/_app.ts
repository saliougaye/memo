import { createRouter } from "../create-router";
import { memoRouter } from "./memo";
import { memoCategoryRouter } from "./memo-category";

export const appRouter = createRouter()
        .merge('memo.', memoRouter)
        .merge('memo-categories.', memoCategoryRouter)

export type AppRouter = typeof appRouter;