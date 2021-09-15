const reducer = (articlefour = [], action) => {
  switch (action.type) {
    case "FETCH_ARTFOUR":
      return [...articlefour, action.payload];
    
    
    

    default:
      return articlefour;
  }
};

export default reducer;