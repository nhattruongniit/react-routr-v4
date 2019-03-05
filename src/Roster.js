import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import FullRoster from './FullRoster';
import Player from './Player';

class Roster extends React.Component {
  render() {
    return (
      <div> 
        <h1>This is roster page !</h1>
        <Switch>
          <Route exact path='/roster' component={FullRoster}/>
          <Route 
            path='/roster/:number' 
            render={(
              {history, match, location}) => <Player match={match} history={history} location={location} /> 
            } 
          />
        </Switch>
        </div>
    )
  }
}

export default Roster;