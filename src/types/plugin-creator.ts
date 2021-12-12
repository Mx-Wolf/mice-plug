import { ElementType } from 'react';
import { PluginConfiguratorCallback } from './plugin-configurator-callback';

export type PluginCreator = <TDataRow,Query>(
  configurator:PluginConfiguratorCallback<TDataRow, Query>
  )=>ElementType<TDataRow>;
