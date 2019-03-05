import React from 'react';
import { Link } from "react-router-dom";
import PlayerApi from './api';

const Player = ({match, history, location}) => {
  const {
    params: { number }
  } = match;

  console.log(match, history, location);
  const player = PlayerApi.get(parseInt(number));

  return (
    <div>
      <h1>
        {player.name} (#{player.number})
      </h1>
      <h2>Position: {player.position}</h2>
      <Link to="/roster">Back</Link>
    </div>
  )
}

export default Player;