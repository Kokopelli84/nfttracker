const BASE_URL = 'https://testnets-api.opensea.io';

function fetchRequest(path, options) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status < 404 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => console.error(err));
}

const getNFTs = (address, dir = 'desc', offset = 0, limit = 50) => {
  const path = `/assets?owner=${address}&order_direction=${dir}&offset=${offset}&limit=${limit}`;
  return fetchRequest(path);
};

export default getNFTs;
