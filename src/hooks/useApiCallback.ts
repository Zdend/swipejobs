import { useState, useCallback } from 'react';

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

  const callback = useCallback<Callback<D>>((onDone) => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetchApi(...fetchArgs);
        setData(response);
        setError(null);
        if (typeof onDone === 'function') {
          onDone(response, null);
        }
      } catch (err) {
        setError(err);
        if (typeof onDone === 'function') {
          onDone(null, err);
        }
      }
      setLoading(false);
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
