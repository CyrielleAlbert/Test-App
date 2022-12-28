import { Button } from "@telia/styleguide/business";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Router from "../router";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is the Main Page</h1>
      <h2>A description of the Main Page</h2>
      <Button
        size="compact"
        label="Domain1"
        onClick={() => navigate(Router.routes.users)}
      />
      <Button
        size="compact"
        label="Domain2"
        onClick={() => navigate(Router.routes.places)}
      />
    </>
  );
};
