import { EndpointError } from './end-point-config';

export interface BufferActions<T>{
  saveRow:(row:Readonly<Partial<T>>)=>Promise<EndpointError>;
  discard:()=>Promise<EndpointError>;
}
