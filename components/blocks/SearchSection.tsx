import React from "react";
import Container from "../layout/Container";
import Search from "./Search";

type Props = {};

const SearchSection = (props: Props) => {
  return (
    <Container className="  rounded-lg max-xl:mx-8 shadow-sm  p-6 mt-8  border-gray-100 border">
      <div className="md:flex  justify-between items-start gap-14 mx-14 ">
        <Search />
      </div>
    </Container>
  );
};

export default SearchSection;
