import React from "react";

import { useHistory } from "react-router-dom";

import Map from "../../components/Map";

import { Container } from "./styles";

const MapPage = () => {
  const history = useHistory();

  return (
    <Container>
      <Map />
    </Container>
  );
};

export default MapPage;
