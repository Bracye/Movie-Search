import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const DisplayContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #121212;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #f0f0f0; /* Greyish white text color */
`;

const MovieInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  max-width: 800px;
`;

const MoviePoster = styled.img`
  border-radius: 10px;
  max-width: 300px; /* Limit the maximum width of the poster */
  flex: 1;
  margin-right: 20px;
`;


const ActorList = styled.ul`
  list-style-type: disc;
  padding-top: 20px
  padding-left: 20px;
  margin: 0;
`;

const RatingList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const RatingItem = styled.li`
  margin-bottom: 5px;
`;

const Separator = styled.hr`
  width: 100%;
  margin: 10px 0;
  border: 1px solid #666;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.span`
  width: 120px;
  text-align: right;
  margin-right: 10px;
`;

function MovieDisplay({ movie }) {
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  const loaded = () => {
    return (
      <DisplayContainer style={fadeInProps}>
        <Separator />
        <h1>{movie.Title}</h1>
        <MovieInfoContainer>
          <Sidebar>
            <div>
              <Label>Genre:</Label>
              {movie.Genre}
            </div>
            <div>
              <Label>Year Released:</Label>
              {movie.Year}
            </div>
            {movie.Actors && (
              <div>
                <Label>Cast:</Label>
                <ActorList>
                  {movie.Actors.split(',').map((actor) => (
                    <li key={actor.trim()}>{actor.trim()}</li>
                  ))}
                </ActorList>
              </div>
            )}
          </Sidebar>
          <MoviePoster src={movie.Poster} alt={movie.Title} />
          <Sidebar>
            <div>
              <Label>Ratings:</Label>
              <RatingList>
                {movie.Ratings.map((rating, index) => (
                  <RatingItem key={index}>{`${rating.Source}: ${rating.Value}`}</RatingItem>
                ))}
              </RatingList>
            </div>
            {movie.Awards && (
              <div>
                <Label>Awards:</Label>
                <p>{movie.Awards}</p>
              </div>
            )}
            {movie.BoxOffice && (
              <div>
                <Label>Box Office:</Label>
                <p>{movie.BoxOffice}</p>
              </div>
            )}
          </Sidebar>
        </MovieInfoContainer>
        {movie.Plot && (
          <div>
            <Separator />
            <h1>Story Line: </h1>
            <p>{movie.Plot}</p>
          </div>
        )}
      </DisplayContainer>
    );
  };

  const loading = () => {
    return (
      <DisplayContainer style={fadeInProps}>
        <h1>Loading...</h1>
      </DisplayContainer>
    );
  };

  return movie ? loaded() : loading();
}

export default MovieDisplay;
