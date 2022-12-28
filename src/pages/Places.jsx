import React from "react";
import { Button } from "@telia/styleguide/business";
import { useNavigate } from "react-router-dom";
import * as Router from "../router";

export const Places = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is the Places Page</h1>
      <h2>A description of the Places Page</h2>
      <Button label="home" onClick={() => navigate(Router.routes.home)} />
    </>
  );
};
