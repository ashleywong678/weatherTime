import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import LocalInfo from "./LocalInfo";

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

const Button = styled.button`
  display: inline-block;
  border: 2px solid #2bdcff;
  background: transparent;
  color: #2bdcff;
  font-size: 16px;
  border-radius: 30px;
  width: fit-content;
  padding: 10px;
  outline: none;
`;

const Weather = () => {
  const [search, setSearch] = useState("");
  const [address, setAddress] = useState("");
  const [forecast, setForecast] = useState({});

  const handleSearch = async () => {
    const geo = await axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          search
        )}.json?access_token=${geoToken}&limit=1`
      )
      .then(({ data }) => {
        console.log("geo", data);
        return {
          latitude: data.features[0].center[1],
          longitude: data.features[0].center[0],
          location: data.features[0].matching_place_name,
        };
      });

    setAddress(geo);

    const forecastData = await axios
      .get(
        // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
        `https://api.openweathermap.org/data/2.5/weather?lat=${geo.latitude}&lon=${geo.longitude}&appid=${weatherToken}&units=imperial`
      )
      .then(({ data }) => {
        console.log("data", data);
        return {
          currentTemp: data.main.temp,
          feelsLikeTemp: data.main.feels_like,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          humidity: data.main.humidity,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          description: data.weather[0].main,
        };
      });
    setForecast(forecastData);
  };

  return (
    <WeatherWrapper>
      <Title>Weather By Location</Title>
      <SearchWrapper>
        <Searchbar
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          placeholder="Search address, city or zip code"
        />
        <Button onClick={() => handleSearch()}>Search</Button>
      </SearchWrapper>
      {Object.keys(forecast).length > 0 && (
        <LocalInfo address={address} forecast={forecast} />
      )}
    </WeatherWrapper>
  );
};

export default Weather;
