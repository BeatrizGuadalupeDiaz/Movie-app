export abstract class HttpAdapter {
  //tipo T = generico
  //
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}
