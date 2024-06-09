"use server";

import { action } from "@/lib/safe-action";
import { contactShemePartneriat } from "./contact.sheme";

export const doSendContactPartenariat = action(
  contactShemePartneriat,
  async (data) => {
    console.log(data);
    return {
      message: "Message envoyer avec succes",
    };
  }
);
