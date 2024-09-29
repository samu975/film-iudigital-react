export enum StatusEnum {
  ACTIVE = 'activo',
  INACTIVE = 'inactivo',
}

export type ProducerType = {
  _id?: string;
  name: string;
  status: StatusEnum;
  slogan: string;
  description: string;
};
