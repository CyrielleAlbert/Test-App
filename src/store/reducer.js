const initialState = [
  {
    name: "Cyrielle Albert",
    age: "24",
    gender: "Female",
    nationality: "French",
  },
];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "GET_USERS":
      return state;
    default:
      return state;
  }
};
