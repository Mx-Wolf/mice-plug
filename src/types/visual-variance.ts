import { MiceColor } from './colors';
import { MiceWeight } from './weight';
import { MiceWidth } from './width';

export interface VisualVariance<T> {
  fontColor?: ((row: T) => MiceColor) | MiceColor | undefined;
  fontWeight?: ((row: T) => MiceWeight) | MiceWeight | undefined;
  width?: ((row: T) => MiceWidth) | MiceWidth | undefined;
}
