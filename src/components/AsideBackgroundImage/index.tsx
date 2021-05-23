import React from "react";

import { Container, CustomPlayer } from "./styles";

const AsideBackground = () => {
  return (
    <Container>
      <CustomPlayer
        autoplay
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
        // style={{ height: "300px", width: "300px" }}
      ></CustomPlayer>
    </Container>
  );
};

export default AsideBackground;
