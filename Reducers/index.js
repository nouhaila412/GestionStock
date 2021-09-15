import { combineReducers } from "redux";
import posts from "./posts";
import articles from "./articles";
import variable from "./variable";
import indice from "./indice";
import livt from "./livt";
import commande from "./commande";
import artfour from "./articlefour";
import nomfour from "./nomfour";






import comt from "./comt";
import oneart from './oneart'
export default combineReducers({
  posts,
  articles,
  variable,
  indice,
  livt,
  comt,
  oneart,
  commande,
  artfour,
  nomfour
  
});
