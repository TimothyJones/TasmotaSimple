import React from 'react';
import './App.css';
import { devices, app } from './config';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1em;
  grid-gap: 0.5em;
  width: 85vw;
  max-width: 85vw;
`;

function App() {
  return (
    <div className="App">
      <header className="App-Header">{app.title}</header>
      <ButtonWrapper>
        {devices.map(({ displayName, host }) => (
          <ToggleButton displayName={displayName} host={host} key={host} />
        ))}
      </ButtonWrapper>
    </div>
  );
}

export default App;
