import React, { useEffect, useState } from 'react';
import api from './api';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ isOn }) => (isOn ? 'green' : 'black')};
  border-radius: 3px;
  border: 2px solid ${({ isOn }) => (isOn ? 'green' : 'black')};
  color: #fff;
  margin: 1em;
  padding: 0.25em 1em;
  font-size: 1.2em;
  display: block;
  width: 90%;
`;

const ToggleButton = ({ host, displayName }) => {
  const [isOn, setIsOn] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const device = api(host);

  useEffect(() => {
    let cancel = false;
    device.isPowerOn().then(wasItOn => {
      if (!cancel) {
        setIsOn(wasItOn);
        setHasLoaded(true);
      }
    });

    return () => {
      cancel = true;
    };
  }, [isOn, hasLoaded, setIsOn, setHasLoaded]);

  return (
    <Button
      isOn={isOn}
      hasLoaded={hasLoaded}
      onClick={() => device.toggle().then(wasItOn => setIsOn(wasItOn))}
    >
      {hasLoaded ? displayName : 'loading'}
    </Button>
  );
};

export default ToggleButton;
