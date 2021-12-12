import { Url } from './url-type';

export interface EndpointParameters<T, Q> {
  get?: ReadonlyArray<(keyof Q)> | undefined;
  put?: ReadonlyArray<(keyof T)> | undefined;
  post?: ReadonlyArray<(keyof T)> | undefined;
  delete?: ReadonlyArray<(keyof T)> | undefined;
}

export interface EndpointConfig<T, Q> {
  url: Url;
  parameters?: Readonly<EndpointParameters<T, Q>> | undefined;
  adapter: (received: unknown) => ReadonlyArray<T>;
  keyField: keyof T;
}

export interface EndpointError {
  message: string;
  field: Readonly<Partial<Record<string, string>>>;
}

export interface EndpointResult<TRow> {
  state: 'busy' | 'ready' | 'stale';
  data: (Partial<TRow>[]) | undefined;
  error: Readonly<Partial<EndpointError>> | undefined;
}

export type EndpointHook<T,Q> = (q:Partial<Q>)=>Readonly<EndpointResult<T>>;

export type DefineEndpoint = <T, Q>(config: Readonly<EndpointConfig<T, Q>>) => EndpointHook<T,Q>;
