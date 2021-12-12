export type Url = string & {'url-brand-type':void};
export const asUrl = (url: string)=> url as Url;
