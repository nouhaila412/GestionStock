import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './navigations/RootNavigator';
import { Provider } from "react-redux";
import reducers from "./Reducers";
import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose } from "redux";

export default function App() {


   const composeEnhancer =
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
   let store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

  return (
     <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
     </Provider>
  );
}
