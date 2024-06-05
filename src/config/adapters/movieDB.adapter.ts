import {AxiosAdapter} from './http/axios.adapter';

export const MovieDBFecher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'fb2a388ef896afdd0bd2e6c480bbb78d',
    language: 'es-ES',
  },
});
