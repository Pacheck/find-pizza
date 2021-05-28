import React from "react";

import { Container } from "./styles";

const SideBar = ({ location }: any) => {
  return (
    <Container>
      <h2>Your location is {location}</h2>
    </Container>
  );
};

export default SideBar;
