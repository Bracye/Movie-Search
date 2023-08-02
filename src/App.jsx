import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import styled from "styled-components";
import Title from "./components/Title";

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: auto;
  text-align: center;
  background-color: #121212; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

function App() {
  const apiKey = "44011384";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const movie = await response.json();
      setMovie(movie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie("Black Panther");
  }, []);

  return (
    <Container>
      <Title>Moive Search App</Title>
      <Form movieSearch={getMovie} />
      {movie && (
        <MovieDisplayContainer>
          <MovieDisplay movie={movie} />
        </MovieDisplayContainer>
      )}
    </Container>
  );
}

const MovieDisplayContainer = styled.div`
  margin-top: 30px;
`;

export default App;
