import './App.css';
import React from "react";
import {Switch, Route} from 'react-router-dom'
import RecipeAPI from "./api/RecipeAPI";
import RecipesAPI from "./api/RecipesAPI";

function App() {
  return (
    <div className="app">
      <header>header</header>
      <main className="page-main">
        <Switch>
          <Route path="/recipes/:id" render={ (props) => <RecipeAPI { ...props } /> } />
          <Route path="/">
            <RecipesAPI/>
          </Route>
        </Switch>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
