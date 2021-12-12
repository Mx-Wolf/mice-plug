import { Column } from './column';

export interface PluginConfig<T>{
  label: string;
  columns: Column<T>[];
}
