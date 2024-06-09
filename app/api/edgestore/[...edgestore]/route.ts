import { auth } from "@/lib/auth";
import { initEdgeStore } from "@edgestore/server";
import {
  type CreateContextOptions,
  createEdgeStoreNextHandler,
} from "@edgestore/server/adapters/next/app";
/**
 * This is the main router for the Edge Store buckets.
 */

type Context = {
  email: string;
};

async function createContext({ req }: CreateContextOptions): Promise<Context> {
  const session = await auth(); // replace with your own session logic

  return {
    email: session?.user.email ?? "all",
  };
}

// const es = initEdgeStore.context<Context>().create();

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(),
  // .path(({ ctx, input }) => [
  //   { category: () => process.env.NODE_ENV },
  //   { author: ctx.email },
  // ]),
});
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
  // createContext,
});
export { handler as GET, handler as POST };
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;
