interface WorkerAddress {
  zoneId: string;
}

export interface WorkerProfile {
  workerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  maxJobDistance: number;
  address?: WorkerAddress;
}