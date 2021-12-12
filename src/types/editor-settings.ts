import { MiceControlBase } from './controls/control-base';
import { Settings } from './settings-callback';

export interface EditorSettings<T>{
  label?:Settings<T, string> | undefined;
  tree: MiceControlBase<T>
}
