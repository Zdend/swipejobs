import { useState, useEffect } from 'react';

export interface ApiResult<D> {
  loading: boolean;
  error: any;
  data: null | D;
}

export const useApiData = <F extends (...args: any[]) => Promise<any>>(
  fetchApi: F,
  ...fetchArgs: Parameters<F>
): ApiResult<Unwrap<ReturnType<F>>> => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let response = null;
    let currentError = null;
    (async () => {
      setLoading(true);
      try {
        response = await fetchApi(...fetchArgs);
      } catch (err) {
        currentError = err;
      }
      setData(response);
      setError(currentError);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchApi, ...fetchArgs]);

  return {
    loading,
    error,
    data
  };
};

export default useApiData;
