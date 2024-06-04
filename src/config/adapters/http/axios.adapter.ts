import axios, {AxiosInstance} from 'axios';
import {HttpAdapter} from './http.adapter';
type Options = {
  baseURL: string;
  params: Record<string, string>;
};
export class AxiosAdapter implements HttpAdapter {
  //personalizaciond e los argumentos que recimos
  private axiosInstance: AxiosInstance;
  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
      params: options.params,
    });
  }

  async get<T>(
    url: string,
    options?: Record<string, unknown> | undefined,
  ): Promise<T> {
    try {
      const {data} = await this.axiosInstance.get(url, options);
      return data;
    } catch (error) {
      throw new Error(`Error fetching get: ${error}`);
    }
  }
}
