import {
  Button,
  Table,
  TableBodyCell,
  TableBodyRow,
} from "@telia/styleguide/business";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Router from "../router";
import { connect } from "react-redux";
import { usersSelector } from "../store/selector";
import { addUserAction } from "../store/actions";
import * as UAnalytics from "../gtm";
import dayjs from "dayjs";

const UsersContainer = (props) => {
  const navigate = useNavigate();
  const users = props.users;
  return (
    <>
      <h1>This is the Users Page</h1>
      <h2>A description of the Users Page</h2>

      <Button
        label="Add new user"
        onClick={() => {
          UAnalytics.push({
            category: "Users",
            action: "Add new user",
            label: "Enter flow",
            value: dayjs(),
          });
          UAnalytics.push2({
            category: "Users",
            action: "Add new user",
            label: "Enter flow",
            value: dayjs(),
          });
          navigate(Router.routes.addNewUser);
        }}
      />
      <Table
        headings={[
          { label: "Name", id: "name" },
          { label: "Age", id: "Age" },
          { label: "Gender", id: "Gender" },
          { label: "Nationality", id: "Nationality" },
        ]}
      >
        {users.map((user) => {
          return (
            <TableBodyRow>
              <TableBodyCell>{user.name}</TableBodyCell>
              <TableBodyCell>{user.age}</TableBodyCell>
              <TableBodyCell>{user.gender}</TableBodyCell>
              <TableBodyCell>{user.nationality}</TableBodyCell>
            </TableBodyRow>
          );
        })}
      </Table>
      <Button label="Home" onClick={() => navigate(Router.routes.home)} />
    </>
  );
};
export const Users = connect(
  (users) => ({
    users: usersSelector({ users }),
  }),
  (dispatch) => ({
    addUserAction: (userInfo) => dispatch(addUserAction(userInfo)),
  })
)(UsersContainer);
