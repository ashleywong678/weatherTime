import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  //   grid-template-columns: 0.2fr 1fr;
  grid-gap: 5px;
`;

const Row = styled.div`
  color: ${(props) => props.color || "#2bdcff"};
  font-size: 14px;
`;

const LocalInfo = ({ address, forecast }) => {
  return (
    <Wrapper>
      <div>
        <b>Weather for {address.location}</b>
      </div>
      <Row>Today will be: {forecast.description}</Row>
      <Row>Latitude: {address.latitude}</Row>
      <Row>Longitude: {address.longitude}</Row>
      <br />
      <div>
        <b>Temperature:</b>
      </div>
      <Row>Current Temp: {forecast.currentTemp}</Row>
      <Row>Feels like: {forecast.feelsLikeTemp}</Row>
      <Row>Low: {forecast.minTemp}</Row>
      <Row>High: {forecast.maxTemp}</Row>
      <br />
      <div>
        <b>Additional Data:</b>
      </div>
      <Row>Humidity: {forecast.humidity}%</Row>
      <Row>Sun Rise: {forecast.sunrise}</Row>
      <Row>Sun Set: {forecast.sunset}</Row>
    </Wrapper>
  );
};

export default LocalInfo;
