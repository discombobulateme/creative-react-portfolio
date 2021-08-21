import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// Style
import styled from 'styled-components';
// Components
import { MovieState } from '../movieState';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  /*
    Checks if the path retrieved by useHistory and saved at url === to
    the url in the movieState.js object
    useEffect re-renders when movies or url change
  */
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <React.Fragment>
      {movie && (
        <StyleDetails
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animated='show'
        >
          <StyleHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt='movie' />
          </StyleHeadLine>
          <StyleAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyleAwards>
          <StyleImageDisplay>
            <img src={movie.secondaryImg} alt='movie' />
          </StyleImageDisplay>
        </StyleDetails>
      )}
    </React.Fragment>
  );
};

const StyleDetails = styled(motion.div)`
  color: white;
`;

const StyleHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyleAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const StyleAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const StyleImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <StyleAward>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </StyleAward>
  );
};

export default MovieDetail;
