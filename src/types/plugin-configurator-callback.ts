import { PluginConfigurationBuilder } from './plugin-configuration-builder';
import { PluginSettings } from './plugin-settings';

export interface PluginConfiguratorCallback<T,Q>{
  (builder:PluginConfigurationBuilder<T>):PluginSettings<T,Q>;
}
