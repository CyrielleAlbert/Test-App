import { TextField } from "@telia/styleguide";
import React, { useEffect } from "react";
import * as UAnalytics from "../../gtm";

export const Step2 = ({ user, setUser }) => {
  useEffect(() => {
    UAnalytics.push({
      category: "Users",
      action: "Add new user",
      label: "step_tracking",
      value: 2,
    });
  }, []);

  return (
    <TextField
      value={user.age}
      label={"Age"}
      onChange={(e) => setUser({ ...user, age: e.target.value })}
    />
  );
};
