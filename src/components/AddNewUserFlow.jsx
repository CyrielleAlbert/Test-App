import React, { useEffect, useState } from "react";
import { StepFlow, StepFlowStep } from "@telia/styleguide/business";
import { RadioButtonGroup, TextField } from "@telia/styleguide";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { usersSelector } from "../store/selector";
import { addUserAction } from "../store/actions";
import * as UAnalytics from "../gtm";
import { Step1 } from "./AddUser/Step1";
import { Step2 } from "./AddUser/Step2";
import { Step3 } from "./AddUser/Step3";
import { Step4 } from "./AddUser/Step4";

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
  const { startTimer, stopTimer, trackDuration } = UAnalytics.AnalyticsTimer();
  useEffect(() => {
    startTimer();
  }, []);

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
        stopTimer().then((duration) => {
          trackDuration({ flow: "Add_new_user" });
        });
        navigate(-1);
      }}
    >
      <StepFlowStep isValid={true} title={"Enter a valid name"}>
        <Step1 user={user} setUser={setUser} />
      </StepFlowStep>
      <StepFlowStep isValid={true} title={"How old are you?"}>
        <Step2 user={user} setUser={setUser} />
      </StepFlowStep>
      <StepFlowStep isValid={true} title={"How do you consider yourself?"}>
        <Step3 user={user} setUser={setUser} />
      </StepFlowStep>
      <StepFlowStep isValid={true} title={"Where are you from?"}>
        <Step4 user={user} setUser={setUser} />
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
