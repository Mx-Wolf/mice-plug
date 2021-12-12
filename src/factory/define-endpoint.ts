import { DefineEndpoint, EndpointConfig } from '../types/end-point-config';

export const defineEndpoint:DefineEndpoint = <T,Q>(config:EndpointConfig<T,Q>)=>{
  throw new Error(`not implemented ${config.url}`);
};

