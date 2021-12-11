export const asDate = <T>(field:keyof T)=>(r:T)=>`${r[field]}`;
