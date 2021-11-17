import EventLog from 'page/eventLog/EventLog';
import Main from 'page/main/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/eventLog" element={<EventLog />} />
      </Routes>
    </>
  );
}

export default App;
