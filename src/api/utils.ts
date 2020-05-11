export const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const DEFAULTS: Partial<RequestInit> = {
  headers: HEADERS,
  method: 'GET',
};

export const fetchJson = async <T extends Record<string, any>>(
  request: RequestInfo,
  config?: RequestInit
): Promise<T> => {
  const options = { ...DEFAULTS, config };
  return new Promise(async (resolve, reject) => {
    const timeoutId = setTimeout(reject, 2000, { code: 'TIMED_OUT' });
    const response = await fetch(request, options);
    const json = await response.json() as T;
    clearTimeout(timeoutId);
    resolve(json);
  });
};