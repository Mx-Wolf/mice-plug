import { EditorConfigurationBuilder } from './editor-configuration-builder';
import { EditorSettings } from './editor-settings';

export interface EditorConfiguratorCallback<T>{
  (builder:EditorConfigurationBuilder<T>):EditorSettings<T>;
}
