const reducer = (article = [], action) => {
  switch (action.type) {
    case "FETCH_ART":
      return action.payload;
    
    case "CREATE_Art":
      return [...article, action.payload];

    

    default:
      return article;
  }
};

export default reducer;
