import { useState, useEffect } from 'react';

export interface ApiResult<D> {
  loading: boolean;
  error: any;
  data: null | D;
}

export const useApiData = <
  F extends (...args: any[]) => Promise<any>,
>(fetchApi: F, ...fetchArgs: Parameters<F>): ApiResult<Unwrap<ReturnType<F>>> => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetchApi(...fetchArgs);
        setData(response);
        setError(null);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchApi, ...fetchArgs]);

  return {
    loading,
    error,
    data,
  };
};
