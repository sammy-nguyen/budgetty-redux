 import axios from "axios";


const REQUEST_USER_DATA = "REQUEST_USER_DATA";

let initialState = {
  email: null,
  firstName: null,
  lastName: null,
};

export const requestUserData = () => {
  let data = axios.get("/auth/user-data").then((response) => response.data);
  return {
    type: REQUEST_USER_DATA,
    payload: data,
  };
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_DATA + "_FULFILLED":
      const { email, firstName, lastName } = action.payload.requestUserData;
      return { email, firstName, lastName };
    default:
      return state;
  }
}
