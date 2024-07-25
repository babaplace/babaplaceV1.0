import Container from "@/components/layout/Container";
import React from "react";
import ImageRoomForm from "./ImagesForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Container>
        <ImageRoomForm />
      </Container>
    </div>
  );
};

export default page;
