export type Settings<R, V> = ((row: R) => V) | V | undefined;
