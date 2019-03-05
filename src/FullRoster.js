import React from 'react';
import { Link } from 'react-router-dom'

import PlayerApi from './api';

class FullRoster extends React.Component {
  render() {
    return (
      <div>
        <h2>This is FullRoster page !</h2>
        <ul>
          {
            PlayerApi.all().map(p => (
              <li key={p.number}>
                <Link to={`/roster/${p.number}`}>{p.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default FullRoster;