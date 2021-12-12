import { EditorConfigurationBuilder } from './editor-configuration-builder';

export interface EditorConfiguratorCallback<T>{
  (builder:EditorConfigurationBuilder<T>):void;
}
