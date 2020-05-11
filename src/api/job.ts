import { fetchJson } from './utils';
import { workerJobMatches } from './endpoints';
import { Job } from '@/types/job';

export const fetchJobMatches = (workerId: string): Promise<Job[]> => {
  const { path } = workerJobMatches(workerId);
  return fetchJson(path);
};