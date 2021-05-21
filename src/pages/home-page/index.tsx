import React from "react";

import { Button, Input } from "semantic-ui-react";

import { signInWithGoogle } from "../../firebase/utils";

const HomePage = () => {
  return (
    <div>
      <Button onClick={signInWithGoogle}>Go to log-in</Button>
      <Input
        action={{
          icon: "search",
          onClick: () => console.log("An action was clicked!"),
        }}
        actionPosition="left"
        placeholder="Search..."
      />
    </div>
  );
};

export default HomePage;
