import { Address } from './address';

export interface CompanyManager {
  name: string;
  phone: string;
}

export interface Company {
  name: string;
  address: Address;
  reportTo: CompanyManager;
}

export interface JobTitle {
  name: string;
  imageUrl: string;
}

export interface JobShift {
  startDate: string;
  endDate: string;
}
export interface Job {
  jobId: string;
  jobTitle: JobTitle;
  company: Company;
  milesToTravel: number;
  wagePerHourInCents: number;
  branchPhoneNumber: string;
  shifts: JobShift[];
  requirements: string[];
}

export enum ErrorCode {
  FAIL_101 = 'FAIL-101'
}

export interface ActionResponse {
  success: boolean;
  message?: string;
  errorCode?: ErrorCode;
}
