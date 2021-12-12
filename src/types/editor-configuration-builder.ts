import { EditorSettings } from './editor-settings';

export interface EditorConfigurationBuilder<T>{
  define(settings:EditorSettings<T>):void;
}
