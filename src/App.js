import React from "react";
import { Route } from "react-router-dom";

import homepage from './homepage'
import pizza from './pizza'

const App = () => {
  return (
    <div>
      <h1>G's Pizza</h1>
      <Route exact path="/" component= {homepage}/>
      <Route path= "/pizza" component= {pizza}/>
    </div>

  );
};
export default App;
