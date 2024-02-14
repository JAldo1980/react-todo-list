import React from "react";
import Container from "./components/Container";
import HeaderComponent from "./components/HeaderComponent";
import CreateObject from "./components/CreateObject";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <HeaderComponent />
        <CreateObject />
      </Container>
    </>
  );
}

export default App;
