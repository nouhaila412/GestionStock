import {createPost, Updatepost} from '../api'
import {fetchpost,deletepost,fetchcom,getOnecom,Updatecmd, fetchart} from '../api'

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await fetchpost();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const addlivt = (id) => async (dispatch) => {
  try {
    const data = await id;
{
  console.log(data);
}
    dispatch({ type: "FETCH_LIVT", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getnomfour = (id) => async (dispatch) => {
  try {
    const data = await id;
{
  console.log(data);
}
    dispatch({ type: "FETCH_NOMF", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const addcomt = (id) => async (dispatch) => {
  try {
    const data = await id;
{
  console.log(data);
}
    dispatch({ type: "FETCH_COMT", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getartfour = (id) => async (dispatch) => {
  try {
    const data  = await id;

    dispatch({ type: "FETCH_ARTFOUR", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getvar = (id) => async (dispatch) => {
  try {
    const data  = await id;

    dispatch({ type: "FETCH_VAR", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getind = (id) => async (dispatch) => {
  try {
    const data  = await id;

    dispatch({ type: "FETCH_IND", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getart = () => async (dispatch) => {
  try {
    const { data } = await fetchart();

    {
      console.log(data);
    }
    dispatch({ type: "FETCH_ART", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const geton = (id) => async (dispatch) => {
  try {
    const { data } = await getOnecom(id);
    {
      console.log(data);
    }
    dispatch({ type: "FETCH_ONEART", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const getCom = () => async (dispatch) => {
  try {
    const { data } = await fetchcom();

    dispatch({ type: "FETCH_COM", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const createpost = (post) => async (dispatch) => {
  try {
    const { data } = await createPost(post);

    dispatch({ type: "CREATE", payload: data });
    toastr.success("Post Created succecfully", "Congratulation");
  } catch (error) {
    console.log(error);
    toastr.warning("Post not Created ", "Erreur");
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await deletepost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await Updatepost(id, post);

    dispatch({
      type: "UPDATE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updatecmd = (id, post) => async (dispatch) => {
  try {
    const { data } = await Updatecmd(id, post);

    dispatch({
      type: "UPDATE_CMD",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};