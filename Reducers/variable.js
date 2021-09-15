const reducer = (variable = [], action) => {
  switch (action.type) {
    case "FETCH_VAR":
      return action.payload;
  

    

    default:
      return variable;
  }
};

export default reducer;