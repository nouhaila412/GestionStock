const reducer = (comt = 0, action) => {
  switch (action.type) {
    case "FETCH_COMT":
      return 4;
    
    default:
      return comt;
  }
};

export default reducer;
