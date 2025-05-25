import { up } from 'up-fetch';
// import { getAuthToken } from '../utils/utils';

const base_url = import.meta.env.VITE_BASE_API;

const uf = up(fetch, () => ({
  baseUrl: base_url,
  onRequest: (config) => {
    // if (getAuthToken())
    {
      //   config.headers.set('Authorization', `Bearer ${getAuthToken()}`);
      config.headers.set('Accept', 'application/json, text/plain, */*');
    }
    return config;
  },
}));

export default uf;
