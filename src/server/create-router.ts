import * as trpc from '@trpc/server';
import { TrpcContext } from "./context";

export const createRouter = () => trpc.router<TrpcContext>();