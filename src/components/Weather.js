import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const geoToken = process.env.REACT_APP_GEOCODE_TOKEN;
const weatherToken = process.env.REACT_APP_WEATHER_TOKEN;

const WeatherWrapper = styled.div`
  display: grid;
  grid-template-rows: fit-content 1fr auto;
  grid-gap: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  padding-right: 5px;
`;

const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  width: 50%;
  grid-gap: 10px;
`;

const Searchbar = styled.input`
  display: inline-block;
  border-radius: 40px;
  background: #424242;
  color: #fff;
  font-size: 16px;
  height: fit-content;
  border-style: none;
  outline: none;
  padding: 15px;
`;

const Button = styled.div`
  display: inline-block;
  border: 2px solid #2bdcff;
  background: transparent;
  color: #2bdcff;
  font-size: 16px;
  border-radius: 30px;
  width: fit-content;
  padding: 10px;
`;

const Weather = () => {
  const [search, setSearch] = useState("");
  const [address, setAddress] = useState("");

  const handleSearch = async () => {
    const geo = await axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          search
        )}.json?access_token=${geoToken}`
      )
      .then(({ data }) => ({
        latitude: data.features[0].center[1],
        longitude: data.features[0].center[0],
        location: data.features[0].place_name,
      }));

    setAddress(geo.location);
    console.log(geo);

    const forecast = await axios
      .get(
        // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
        `https://api.openweathermap.org/data/2.5/weather?lat=${geo.latitude}&lon=${geo.longitude}&appid=${weatherToken}`
      )
      .then((res) => console.log(res.data));
  };

  return (
    <WeatherWrapper>
      <Title>Weather By Location</Title>
      <SearchWrapper>
        <Searchbar
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          placeholder="Search location to get weather info..."
        />
        <Button onClick={() => handleSearch()}>Search</Button>
      </SearchWrapper>
    </WeatherWrapper>
  );
};

export default Weather;
