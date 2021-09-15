
const reducer = (commande = [], action) => {
  switch (action.type) {
  
    case "UPDATE_CMD":
      return commande.map((pos) =>
        pos.Num_Ord === action.payload.Num_Ord ? action.payload : pos
      );

    default:
      return commande;
  }
};

export default reducer;
