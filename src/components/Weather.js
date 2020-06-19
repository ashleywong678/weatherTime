import React, { useState } from "react";
import styled from "styled-components";

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

  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
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
        <Button onClick={() => handleSearch(search)}>Search</Button>
      </SearchWrapper>
    </WeatherWrapper>
  );
};

export default Weather;
