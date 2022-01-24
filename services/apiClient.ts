import { Nft } from 'ts/types/INFT';

const BASE_URL = 'https://testnets-api.opensea.io';

// async function fetchRequest(path, options?: any) {
//   try {
//     const res = await fetch(BASE_URL + path, options);
//     const res_1 = res.status < 404 ? res : Promise.reject();
//     return res_1.status !== 204 ? res_1.json() : await res_1;
//   } catch (err) {
//     return console.error(err);
//   }
// }

function fetchRequest(path: string, options?: RequestInit) {
  return fetch(BASE_URL + path, options)
    .then(res => (res.status < 400 ? res : Promise.reject()))
    .then(res => (res.status !== 204 ? res.json() : res));
}

const getNFTs = (
  address: string,
  dir = 'desc',
  offset = 0,
  limit = 50
): Promise<{ assets: Nft[] }> => {
  const path = `/assets?owner=${address}&order_direction=${dir}&offset=${offset}&limit=${limit}`;
  return fetchRequest(path);
};

export default getNFTs;
