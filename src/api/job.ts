import { fetchJson } from './utils';
import { workerJobMatches, workerJobAccept, workerJobReject } from './endpoints';
import { Job, ActionResponse } from '@/types/job';

export const fetchJobMatches = (workerId: string): Promise<Job[]> => {
  const { path } = workerJobMatches(workerId);
  return fetchJson(path);
};

export const fetchAcceptJob = (workerId: string, jobId: string): Promise<ActionResponse> => {
  const { path, method } = workerJobAccept(workerId, jobId);
  return fetchJson(path, {
    method
  });
};

export const fetchRejectJob = (workerId: string, jobId: string): Promise<ActionResponse> => {
  const { path, method } = workerJobReject(workerId, jobId);
  return fetchJson(path, {
    method
  });
};
