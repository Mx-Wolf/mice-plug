export interface FormContext<T>{
  row:Readonly<T>[];
  data:Readonly<Array<Readonly<T>>>;
  rowIndex: number;
  setValue:<K extends keyof T>(field:K, value:T[K])=>void;
  setValues:<K extends keyof T>(fields:Record<K,T[K]>)=>void;
}
