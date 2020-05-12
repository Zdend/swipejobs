import { useState, useCallback, useEffect } from 'react';

type Callback<D> = (
  onDone?: (response?: D, error?: any) => void
) => void;

export interface ApiResult<D> {
  loading: boolean;
  error: any;
  data: null | D;
}

export type TupleResult<D> = [ Callback<D>, ApiResult<D> ];

export const useApiCallback = <
  F extends (...args: any[]) => Promise<any>,
  D = Unwrap<ReturnType<F>>
>(fetchApi: F, ...fetchArgs: Parameters<F>): TupleResult<D> => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setData(null);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchApi, ...fetchArgs]);

  const callback = useCallback<Callback<D>>((onDone) => {
    let response = null;
    let error = null;
    (async () => {
      setLoading(true);
      try {
        response = await fetchApi(...fetchArgs);
      } catch (err) {
        error = err;
      }
      setData(response);
      setError(error);
      setLoading(false);
      if (typeof onDone === 'function') {
        onDone(response, error);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchApi, ...fetchArgs]);

  return [ callback, {
    loading,
    error,
    data,
  }];
};

export default useApiCallback;
