import { Column } from './column';
import { EndpointHook } from './end-point-config';
import { VisualVariance } from './visual-variance';

export interface PluginSettings<T,Q> extends VisualVariance<T>{
  label: string;
  source: EndpointHook<T,Q>;
  imageIndex: ((row:T)=>number)|number;
  columns: Column<T>[];
  docFlow: number[];
}
