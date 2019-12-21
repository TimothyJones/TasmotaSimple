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

const apiGet = (hostAndPort, command) =>
  fetchWith(`http://${hostAndPort}/cm?cmnd=${command}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });

const getPowerState = ({ POWER }) => POWER === 'ON';

export default hostAndPort => ({
  toggle: cmd => apiGet(hostAndPort, 'POWER TOGGLE').then(getPowerState),
  isPowerOn: cmd => apiGet(hostAndPort, 'Power').then(getPowerState)
});
