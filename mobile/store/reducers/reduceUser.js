const initialValue = {
  access_token: "",
  user: {},
};

function reducerUser(state = initialValue, action) {
  switch (action.value) {
    case "SET_TOKEN":
      return { ...state, access_token: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "PUT_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default reducerUser;