import React, { useEffect, useState } from 'react';
import api from './api';
import styled from 'styled-components';
import { app } from './config';

const Button = styled.button`
  background: ${({ isOn }) => (isOn ? 'green' : 'black')};
  border-radius: 3px;
  border: 2px solid ${({ isOn }) => (isOn ? 'green' : 'black')};
  color: #fff;
  padding: 0.25em 1em;
  font-size: 1.2em;
  display: block;
  width: 100%;
`;

const SettingsButton = styled.a`
  background: grey;
  border-radius: 3px;
  padding: 0.25em 1em;
  font-size: 1.2em;
  border: 2px grey;
  display: block;
  text-align: center;
  color: #000;
  text-decoration: none;
  width: 100%;

  &:visited {
    text-decoration: none;
    color: #000;
  }
`;

const ToggleButton = ({ host, displayName, powerId }) => {
  const [isOn, setIsOn] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    let cancel = false;
    const poll = () =>
      api(host, powerId)
        .isPowerOn()
        .then(wasItOn => {
          if (!cancel) {
            setIsOn(wasItOn);
            setHasLoaded(true);
          }
        });
    poll();

    const repoll = setInterval(poll, app.pollIntervalMillis);
    return () => {
      cancel = true;
      clearTimeout(repoll);
    };
  }, [isOn, hasLoaded, setIsOn, setHasLoaded, host, powerId]);

  const device = api(host, powerId);
  return (
    <>
      <Button
        isOn={isOn}
        hasLoaded={hasLoaded}
        onClick={() => {
          setIsOn(!isOn); // Assume it worked so the UI feels more responsive
          device.toggle().then(wasItOn => setIsOn(wasItOn));
        }}
      >
        {hasLoaded ? displayName : displayName + ':Offline'}
      </Button>
      <SettingsButton href={`http://${host}`}>
        <span role="img" aria-label="Gear">
          ⚙️
        </span>
      </SettingsButton>
    </>
  );
};

export default ToggleButton;
