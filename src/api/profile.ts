import { fetchJson } from './utils';
import { workerProfile } from './endpoints';
import { WorkerProfile } from '@/types/profile';

export const fetchProfile = (workerId: string): Promise<WorkerProfile> => {
  const { path } = workerProfile(workerId);
  return fetchJson(path);
};
