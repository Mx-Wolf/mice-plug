
export interface EditorProps<T>{
  row:Readonly<T>[];
  data:ReadonlyArray<Readonly<T>>;
  rowIndex: number;
  setValue:<K extends keyof T>(field:K, value:T[K])=>void;
  setValues:(fields:Partial<T>)=>void;
}

