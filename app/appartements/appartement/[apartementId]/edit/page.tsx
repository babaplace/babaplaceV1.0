import React from "react";
import {
  getAppartementByIdWithMedias,
  getAppartementByIdWithMediasUser,
} from "../../apartement.query";
import { notFound } from "next/navigation";
import { getUserSession } from "@/lib/prisma";
import Container from "@/components/layout/Container";
import EditForm from "./EditForm";

const page = async ({ params }: { params: { apartementId: string } }) => {
  const session = await getUserSession();
  if (!session.user.id) {
    notFound();
  }

  const appartement = await getAppartementByIdWithMediasUser(
    params.apartementId,
    session.user.id
  );

  if (!appartement) {
    notFound();
  }

  return (
    <Container className="px-8">
      <EditForm appartement={appartement} />
    </Container>
  );
};

export default page;
