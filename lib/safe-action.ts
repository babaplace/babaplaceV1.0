import { createSafeActionClient } from "next-safe-action";
import { auth } from "./auth";

export const action = createSafeActionClient({
  handleReturnedServerError: async (error) => {
    return error.message;
  },
});

export const authAction = createSafeActionClient({
  // If you need to access validated input, you can use `parsedInput` how you want
  // in your middleware. Please note that `parsedInput` is typed any, as it
  // comes from an action, while middleware is an (optional) instance function.
  // Can also be a non async function.
  async middleware(parsedInput) {
    const session = await auth();

    console.log(session);

    if (!session) {
      throw new Error("Vous devez vous connecter d'abord!");
    }

    // In the real world, you would check if the session is valid by querying a database.
    // We'll keep it very simple here.
    const email = session.user.email;

    if (!email) {
      // TODO : redirect to login
      throw new Error("Impossible de passer a l'action");
    }

    return { session };
  },
  handleReturnedServerError: async (error) => {
    return error.message;
  },
});
