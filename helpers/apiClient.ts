const BASE_URL = 'https://testnets-api.opensea.io';

async function fetchRequest(path: string, options) {
  try {
    const res = await fetch(BASE_URL + path, options);
    const res_1 = res.status < 404 ? res : Promise.reject();
    return res_1.status !== 204 ? res_1.json() : res_1;
  } catch (err) {
    return console.error(err);
  }
}

const getNFTs = (address, dir = 'desc', offset = 0, limit = 50) => {
  const path = `/assets?owner=${address}&order_direction=${dir}&offset=${offset}&limit=${limit}`;
  return fetchRequest(path);
};

export default getNFTs;
