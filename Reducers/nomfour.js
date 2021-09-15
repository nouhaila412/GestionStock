const reducer = (nomf = "", action) => {
  switch (action.type) {
    case "FETCH_NOMF":
      return  action.payload;
    
    default:
      return nomf;
  }
};

export default reducer;
