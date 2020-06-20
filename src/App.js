import React from "react";
import styled from "styled-components";

import Time from "./components/Time";
import Weather from "./components/Weather";

const AppWrapper = styled.div`
  background-color: #282c34;
  height: 100vh;
  color: #fff;
`;

const BodyWrapper = styled.div`
  display: grid;
  grid-template-rows 1fr auto;
  padding: 50px 40px 0px 40px;
  grid-gap: 50px;
`;

function App() {
  return (
    <AppWrapper>
      <BodyWrapper>
        <Time />
        <Weather />
      </BodyWrapper>
    </AppWrapper>
  );
}

export default App;
