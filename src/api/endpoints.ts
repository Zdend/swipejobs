const BASE_PATH = `/api`;

type PathWithParams = (...args: any[]) => { 
  path: string, 
  method: 'GET' | 'POST' | 'PUT'
};

export const workerProfile: PathWithParams = (workerId: string) => ({
  path: `${BASE_PATH}/worker/${workerId}/profile`,
  method: 'GET'
});

export const workerJobMatches: PathWithParams = (workerId: string) => ({
  path: `${BASE_PATH}/worker/${workerId}/matches`,
  method: 'GET'
});

export const workerJobAccept: PathWithParams = (workerId: string, jobId: string) => ({
  path: `${BASE_PATH}/worker/${workerId}/job/${jobId}/accept`,
  method: 'POST'
});

export const workerJobReject: PathWithParams = (workerId: string, jobId: string) => ({
  path: `${BASE_PATH}/worker/${workerId}/job/${jobId}/reject`,
  method: 'POST'
});