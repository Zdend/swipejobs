import { Address } from './address';
export interface WorkerProfile {
  workerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  maxJobDistance: number;
  address?: Address;
}