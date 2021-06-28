import { IClient } from '../interfaces/iclient';

export const clientDisplayDate = (client: IClient | string): string => {
  const value = typeof client === 'string' ? client : client.dat_nasc;
  const date = new Date(value);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}${month}${date.getFullYear()}`;
};

export const clientDBDate = (displayDate: string): string => {
  const day = displayDate.slice(0, 2);
  const month = displayDate.slice(2, 4);
  const year = displayDate.slice(4);

  return `${year}-${month}-${day}T00:00:00`;
};
