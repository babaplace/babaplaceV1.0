"use server";

import { authAction } from "@/lib/safe-action";
import { z } from "zod";

export const doBooking = authAction(z.object({}), async () => {});
