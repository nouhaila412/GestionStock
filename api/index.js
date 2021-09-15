import axios from "axios";

const url = "http://localhost:8000/add";

export const createPost = (newPost) => {
  return axios.post(url, newPost);
};

export const fetchpost = () => {
  return axios.get("http://1af3-196-206-107-185.ngrok.io/apiachat_ent_pie_commande/");
};
export const fetchcom = () => {
  return axios.get("http://1af3-196-206-107-185.ngrok.io/apiachat_lig_pie/");
};
export const getOnecom = (id) => {
  return axios.get(`http://1af3-196-206-107-185.ngrok.io/apiachat_lig_pie/${id}`);
};
export const fetchart = () => {
  return axios.get( "http://1af3-196-206-107-185.ngrok.io/apiachat_lig_pie/");
};
export const Updatepost = (id, newpost) => {
  return axios.put(
    `http://1af3-196-206-107-185.ngrok.io/apiachat_lig_pie/${id}/`,
    newpost
  );
};
export const Updatecmd = (id, newpost) => {
  return axios.put(
    `http://1af3-196-206-107-185.ngrok.io/apiachat_ent_pie_commande/${id}/`,
    newpost
  );
};





