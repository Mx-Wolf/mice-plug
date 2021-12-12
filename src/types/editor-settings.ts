
export interface EditorSettings<T>{
  label?:((row:T)=>string)|string|undefined;
}
