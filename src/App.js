import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Container, } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile"; 

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <div>Home</div> }
        />
        <Route
          exact
          path="/user/profile"
          render={ () => <UserProfile /> }
        />
      </Switch>
    </Container>
  </>
)

export default App;


