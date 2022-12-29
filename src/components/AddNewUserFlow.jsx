import React, { useState } from "react";
import { StepFlow, StepFlowStep } from "@telia/styleguide/business";
import { RadioButtonGroup, TextField } from "@telia/styleguide";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { usersSelector } from "../store/selector";
import { addUserAction } from "../store/actions";

const AddNewUserFlowContainer = (props) => {
  const navigate = useNavigate();
  console.log("øø", props);
  const users = props.users;
  const addUser = props.addUserAction;
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "",
    nationality: "",
  });

  return (
    <StepFlow
      title="Add new user"
      description="Add a new user to the system"
      onCancel={() => navigate(-1)}
      labels={{
        next: "Next",
        previous: "Previous",
        cancel: "Cancel",
        submit: "Submit",
      }}
      onSubmit={() => {
        addUser(user);
        navigate(-1);
      }}
    >
      <StepFlowStep isValid={true} title={"Enter a valid name"}>
        <TextField
          value={user.name}
          label={"Name"}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </StepFlowStep>
      <StepFlowStep isValid={true} title={"How old are you?"}>
        <TextField
          value={user.age}
          label={"Age"}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
      </StepFlowStep>
      <StepFlowStep isValid={true} title={"How do you consider yourself?"}>
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
      </StepFlowStep>
      <StepFlowStep isValid={true} title={"Where are you from?"}>
        <TextField
          value={user.nationality}
          label={"Nationality"}
          onChange={(e) => setUser({ ...user, nationality: e.target.value })}
        />
      </StepFlowStep>
    </StepFlow>
  );
};

export const AddNewUserFlow = connect(
  (users) => ({
    users: usersSelector({ users }),
  }),
  (dispatch) => ({
    addUserAction: (userInfo) => dispatch(addUserAction(userInfo)),
  })
)(AddNewUserFlowContainer);
