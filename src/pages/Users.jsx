import { Button } from "@telia/styleguide/business";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Router from "../router";

export const Users = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is the Users Page</h1>
      <h2>A description of the Users Page</h2>
      <Button label="home" onClick={() => navigate(Router.routes.home)} />
    </>
  );
};
