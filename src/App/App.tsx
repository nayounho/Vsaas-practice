import EventLog from 'page/eventLog/EventLog';
import Main from 'page/main/Main';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/eventLog" component={EventLog} />
      </Switch>
    </>
  );
}

export default App;
