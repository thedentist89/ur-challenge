import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/pages/Profile.jsx";
import People from "./components/pages/People.jsx";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  border-top: 0.7rem solid #6050dc;
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={People}></Route>
        <Route exact path="/profile/:id" component={Profile}></Route>
      </Switch>
    </Container>
  );
}

export default App;
