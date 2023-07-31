import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DisplayContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease;

  h1 {
    font-size: 2.5em;
    color: #0071eb;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.2em;
    color: #333;
    margin-bottom: 5px;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    :hover {
      transform: scale(1.05);
    }
  }
`;

const Placeholder = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease;

  h1 {
    font-size: 2em;
    color: #999;
    margin-bottom: 10px;
  }
`;

const ActorList = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.5em;
    margin-bottom: 5px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin: 0;
  }

  li {
    font-size: 1.1em;
    margin-bottom: 5px;
  }
`;

function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <DisplayContainer>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
        {movie.Actors && (
          <ActorList>
            <h2>Actors:</h2>
            <ul>
              {movie.Actors.split(',').map((actor) => (
                <li key={actor.trim()}>{actor.trim()}</li>
              ))}
            </ul>
          </ActorList>
        )}
      </DisplayContainer>
    );
  };

  const loading = () => {
    return (
      <Placeholder>
        <h1>Loading...</h1>
      </Placeholder>
    );
  };

  return movie ? loaded() : loading();
}

export default MovieDisplay;
