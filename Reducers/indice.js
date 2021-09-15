const reducer = (ind = [], action) => {
  switch (action.type) {
    case "FETCH_IND":
      return action.payload;
  
    default:
      return ind;
  }
};

export default reducer;