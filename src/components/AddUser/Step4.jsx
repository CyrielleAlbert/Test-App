import { TextField } from "@telia/styleguide";
import React, { useEffect } from "react";
import * as UAnalytics from "../../gtm";

export const Step4 = ({ user, setUser }) => {
  useEffect(() => {
    UAnalytics.push({
      category: "Users",
      action: "Add new user",
      label: "step_tracking",
      value: 4,
    });
  }, []);

  return (
    <TextField
      value={user.nationality}
      label={"Nationality"}
      onChange={(e) => setUser({ ...user, nationality: e.target.value })}
    />
  );
};
