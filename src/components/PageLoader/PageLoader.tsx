import React from 'react';
import { RiLoader4Line } from 'react-icons/ri';
import PageStatus from '../PageStatus';

interface PageLoaderProps {
  className?: string;
  children?: React.ReactNode;
  inline?: boolean;
}

const PageLoader = ({ children, ...rest }: PageLoaderProps) => {
  return (
    <PageStatus
      {...rest}
      IconComponent={RiLoader4Line}
      iconProps={{ className: 'spin primary--text' }}
    >
      {children || 'Loading...'}
    </PageStatus>
  );
};

export default PageLoader;
