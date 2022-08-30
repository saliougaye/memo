import * as trpc from '@trpc/server';
import * as trpcNext from "@trpc/server/adapters/next";
import { prisma } from "../common/prisma";

export const createContext = async (ctx: trpcNext.CreateNextContextOptions) => {

    const { req, res } = ctx;

    return {
        req,
        res,
        prisma
    }

}

export type TrpcContext = trpc.inferAsyncReturnType<typeof createContext>;