import { useState, useEffect } from 'react';

export interface ApiResult<D> {
  loading: boolean;
  error: any;
  data: null | D;
}

export const useApiData = <
  R, 
  F extends (...args: any[]) => Promise<R>,
>(fetchApi: F, ...fetchArgs: Parameters<F>): ApiResult<R> => {

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
  }, [...fetchArgs]);

  return {
    loading,
    error,
    data,
  };
};
