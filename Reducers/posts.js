
const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
        case "FETCH_COM":
      return action.payload;
       case "FETCH_ONE":
      return action.payload;
    case "CREATE":
      return {
        ...posts,
        post: [...posts.post, action.payload.post],
      };

    case "DELETE":
      return {
        ...posts,
        post: posts.post.filter((item, index) => item._id !== action.payload),
      };

    case "UPDATE":
      return posts.map((pos) =>
        pos.Num_Ord_Lig === action.payload.Num_Ord_Lig ? action.payload : pos
      );

    default:
      return posts;
  }
};

export default reducer;
