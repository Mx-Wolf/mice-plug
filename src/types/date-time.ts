export type DateTimeIso = string & {'date-time-iso':void};

export const asDateTimeIso = (dateTimeIso:string)=>dateTimeIso as DateTimeIso;
