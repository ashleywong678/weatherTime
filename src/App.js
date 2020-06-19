import React from "react";
import styled from "styled-components";

import Time from "./components/Time";

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  height: 100vh;
`;

// const Header = styled.header`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
// `;

const BodyWrapper = styled.div`
  display: grid;
  grid-template-rows 1fr 0.5fr auto;
  padding: 100px 20px 0px 20px;
`;

function App() {
  return (
    <AppWrapper>
      <BodyWrapper>
        <Time />
      </BodyWrapper>
    </AppWrapper>
  );
}

export default App;
