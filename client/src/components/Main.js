import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Header from './Header';
import Dashboard from './Dashboard';
import CreateEvent from './CreateEvent';
import EventDetail from './EventDetail';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/create_event" component={CreateEvent} />
          <Route path="/events/:id" component={EventDetail} />
        </Switch>
      </div>
    )
  }
}

export default Main;