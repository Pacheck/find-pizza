import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector((state: any) => state.user.currentUser);
  console.log(user);

  return <div>Home page</div>;
};

export default HomePage;
