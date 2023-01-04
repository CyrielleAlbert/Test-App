import { RadioButtonGroup } from "@telia/styleguide";
import React, { useEffect } from "react";
import * as UAnalytics from "../../gtm";

export const Step3 = ({ user, setUser }) => {
  useEffect(() => {
    UAnalytics.push({
      category: "Users",
      action: "Add new user",
      label: "step_tracking",
      value: 3,
    });
  }, []);

  return (
    <RadioButtonGroup
      list={[
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" },
      ]}
      type={"horizontal"}
      name={"Gender"}
      onChange={(e) => {
        setUser({ ...user, gender: e.target.value });
      }}
      selectedValue={user.gender}
    />
  );
};
