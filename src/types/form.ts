import { Settings } from './settings-callback';

export interface Form<T>{
  label?:Settings<T,string>;
}
