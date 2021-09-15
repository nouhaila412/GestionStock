const reducer = (livt = 0, action) => {
  switch (action.type) {
    case "FETCH_LIVT":
      return livt + action.payload ;
    
    default:
      return livt;
  }
};

export default reducer;
