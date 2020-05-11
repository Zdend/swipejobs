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

  const response = await fetch(request, options);
  return await response.json() as T;
};