const user = (state = { token: "" }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { token: action.payload };
    default:
      return state;
  }
};

export default user;
