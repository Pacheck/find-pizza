import React from "react";

import { useHistory } from "react-router-dom";

import { auth } from "../../firebase/utils";

const MapPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Testando map!</h1>
      <button
        onClick={() => {
          auth.signOut();
          history.push("/user");
        }}
      >
        Deslogar
      </button>
    </div>
  );
};

export default MapPage;
