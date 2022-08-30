import { createRouter } from "../create-router";
import { memoRouter } from "./memo";

export const appRouter = createRouter()
        .merge('memo.', memoRouter);


export type AppRouter = typeof appRouter;