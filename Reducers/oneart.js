const reducer = (oneart = [], action) => {
  switch (action.type) {
   
    case "FETCH_ONEART":
      return action.payload;
   

    

    default:
      return oneart;
  }
};

export default reducer;