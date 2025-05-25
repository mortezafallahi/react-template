import { createSearchParams } from 'react-router-dom';
import uf from '../data/upfetch';

const isLaravel = import.meta.env.VITE_LARAVEL_BACKEND_FRAMEWORK === 'true';

const createFetcher = (url, method = 'GET', headers = {}, schema = null) => {
  return async (variables = {}) => {
    let search = createSearchParams();

    let _url = url.replace(/:\w+/g, (match) => {
      let res;
      if (variables instanceof FormData) {
        const key = match.replace(':', '');
        res = variables.get(key);
        variables.delete(key);
      } else {
        res = variables[match.replace(':', '')];
        delete variables[match.replace(':', '')];
      }
      return res;
    });

    if (typeof variables.query === 'object' && variables.query !== null) {
      search = createSearchParams(variables.query);
    }

    if (['PATCH', 'DELETE'].includes(method.toUpperCase()) && isLaravel) {
      search.append('_method', method.toUpperCase());
    }

    if (search.size) {
      _url += `?${search.toString()}`;
    }

    try {
      const response = await uf(_url, {
        method:
          ['DELETE', 'PUT', 'PATCH'].includes(method.toUpperCase()) && isLaravel
            ? 'POST'
            : method.toUpperCase(),
        body: ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())
          ? variables
          : null,
        headers: {
          ...headers,
          'Content-Type':
            variables &&
            typeof variables === 'object' &&
            !(variables instanceof FormData)
              ? 'application/json;charset=utf-8'
              : undefined,
        },
        schema: schema,
      });

      if (!response.status) {
        throw Error(response.message);
      }

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

export default createFetcher;
