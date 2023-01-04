import { TextField } from "@telia/styleguide";
import React, { useEffect } from "react";
import * as UAnalytics from "../../gtm";

export const Step1 = ({ user, setUser }) => {
  useEffect(() => {
    UAnalytics.push({
      category: "Users",
      action: "Add new user",
      label: "step_tracking",
      value: 1,
    });
  }, []);

  return (
    <TextField
      value={user.name}
      label={"Name"}
      onChange={(e) => setUser({ ...user, name: e.target.value })}
    />
  );
};
