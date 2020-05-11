import React from 'react';
import PageLoader from '../PageLoader';
import GenericError from '../GenericError';

interface DataStateProps {
  loading: boolean;
  error: any;
  data: any;
}

const isLoading = (loading: DataStateProps['loading']): boolean => loading;
const hasError = (error: DataStateProps['error']): boolean => error;
const hasNoData = (data: DataStateProps['data']): boolean => !data || (Array.isArray(data) && !data.length);

const DataState = ({
  loading,
  error,
  data,
}: DataStateProps) => {
  if (isLoading(loading)) {
    return <PageLoader className="my-4" inline data-testid="data-state__loader" />;
  }
  if (hasError(error)) {
    return <GenericError className="my-4" data-testid="data-state__error" />;
  }
  if (hasNoData(data)) {
    return (
      <h3 className="my-4" data-testid="data-state__no-data">
        No data found.
      </h3>
    );
  }
};

export const shouldRenderDataState = ({
  loading,
  error,
  data,
}: DataStateProps): boolean => {
  return isLoading(loading) || hasError(error) || hasNoData(data);
};

export default DataState;