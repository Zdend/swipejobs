import React from 'react';
import { RiErrorWarningLine, RiStackLine } from 'react-icons/ri';
import PageLoader from '../PageLoader';
import PageStatus from '../PageStatus';

interface DataStateProps {
  loading: boolean;
  error: any;
  data: any;
  inline?: boolean;
}

const isLoading = (loading: DataStateProps['loading']): boolean => loading;
const hasError = (error: DataStateProps['error']): boolean => error;
const hasNoData = (data: DataStateProps['data']): boolean =>
  !data || (Array.isArray(data) && !data.length);

const DataState = ({ loading, error, data, inline }: DataStateProps) => {
  if (isLoading(loading)) {
    return <PageLoader data-testid="data-state__loader" inline={inline} />;
  }
  if (hasError(error)) {
    return (
      <PageStatus
        data-testid="data-state__error"
        IconComponent={RiErrorWarningLine}
        iconProps={{ className: 'error--text' }}
        inline={inline}
      >
        Something went wrong..
      </PageStatus>
    );
  }
  if (hasNoData(data)) {
    return (
      <PageStatus data-testid="data-state__no-data" IconComponent={RiStackLine} inline={inline}>
        No data found.
      </PageStatus>
    );
  }
  return null;
};

export const shouldRenderDataState = ({ loading, error, data }: DataStateProps): boolean => {
  return isLoading(loading) || hasError(error) || hasNoData(data);
};

export default DataState;
