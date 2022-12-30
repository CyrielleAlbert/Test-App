import { Button } from "@telia/styleguide/business";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Router from "../router";
import * as UAnalytics from "../gtm";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is the Main Page</h1>
      <h2>A description of the Main Page</h2>
      <Button
        size="compact"
        label="See Users"
        onClick={() => {
          UAnalytics.push({
            category: "Main",
            action: "See Users",
            label: "Navigate",
            value: 0,
          });
          navigate(Router.routes.users);
        }}
      />
      <Button
        size="compact"
        label="See Places"
        onClick={() => {
          UAnalytics.push({
            category: "Main",
            action: "See Places",
            label: "Navigate",
            value: 0,
          });
          navigate(Router.routes.places);
        }}
      />
    </>
  );
};
