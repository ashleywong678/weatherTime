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
  padding: 100px 20px 0px 20px;
  grid-gap: 40px;
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
