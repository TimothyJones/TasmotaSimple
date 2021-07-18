import fetch from 'cross-fetch';

const fetchWith = (url, options) =>
  fetch(url, options).then(response => {
    if (response.ok) {
      return response.json();
    }
    console.log('Error response', response);
    return {
      error: response.statusText + JSON.stringify(response.json())
    };
  });

const apiCommand = (hostAndPort, command) =>
  fetchWith(`http://${hostAndPort}/cm?cmnd=${command}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });

const marshalPowerId = powerId => `POWER${powerId}`;

const getPowerState = (response, powerId) =>
  response.POWER === 'ON' || response[marshalPowerId(powerId)] === 'ON';

export default (hostAndPort, powerId = 1) => ({
  toggle: () =>
    apiCommand(
      hostAndPort,
      `${marshalPowerId(powerId)} TOGGLE`
    ).then(response => getPowerState(response, powerId)),
  isPowerOn: () =>
    apiCommand(hostAndPort, 'Status 11').then(({ StatusSTS }) =>
      getPowerState(StatusSTS, powerId)
    )
});
