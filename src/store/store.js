import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducer";

export const usersStore = configureStore({ reducer: usersReducer });
