import React from 'react';
import './App.css';
import { devices, app } from './config';

import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-Header">{app.title}</header>
      {devices.map(({ displayName, host }) => (
        <ToggleButton displayName={displayName} host={host} key={host} />
      ))}
    </div>
  );
}

export default App;
