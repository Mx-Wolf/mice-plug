import { VisualVariance } from './visual-variance';

export interface Column<T> extends VisualVariance<T>{
  label?: string | undefined;
  formatter: ((row: T) => string) | keyof T;
  comparer?: ((left: T, right: T) => number) | keyof T | undefined;
  hidden?: boolean | undefined;
}
