export interface CompanyAddress {
  formattedAddress: string;
}

export interface CompanyManager {
  name: string;
  phone: string;
}

export interface Company {
  name: string;
  address: CompanyAddress;
  reportTo: CompanyManager;
}

export interface JobTitle {
  name: string;
  imageUrl: string;
}

export interface Job {
  jobId: string;
  jobTitle: JobTitle;
  company: Company;
  milesToTravel: number;
  wagePerHourInCents: number;
  branchPhoneNumber: string;
  shifts: any[];
  requirements: string;
}