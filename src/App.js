import React from "react";
import { Route } from "react-router-dom";

import Homepage from './homepage'
import Pizza from './pizza'

const App = () => {
  return (
    <div>
      <h1>G's Pizza</h1>
      <Route exact path="/" component= {Homepage}/>
      <Route path= "/pizza" component= {Pizza}/>
    </div>

  );
};
export default App;
