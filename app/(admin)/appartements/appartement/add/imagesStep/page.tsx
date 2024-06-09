import Container from "@/components/layout/Container";
import React from "react";
import ImagesForm from "../../../../../../components/AddAppartementSteps/ImagesForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Container>
        <ImagesForm />
      </Container>
    </div>
  );
};

export default page;
