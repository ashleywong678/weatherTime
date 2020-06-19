import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';
import moment from "moment";

const TimeWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  font-size: 32px;
  color: #fff;
  grid-gap: 20px;
`;

const Time = () => {
  const [time, setTime] = useState(moment().format("LTS"));

  useEffect(() => {
    setTime(moment().format("LTS"));
  }, [time]);

  return (
    <TimeWrapper>
      <div>{moment().format("[Today is:] dddd, MMMM Do YYYY")}</div>
      <div>{time}</div>
    </TimeWrapper>
  );
};

export default Time;
