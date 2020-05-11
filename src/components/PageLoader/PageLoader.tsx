import React from 'react';
import PageStatus from '../PageStatus';
import { RiLoader4Line } from 'react-icons/ri';

interface PageLoaderProps {
  className?: string;
  children?: React.ReactNode;
  inline?: boolean;
}

const PageLoader = ({ children, ...rest }: PageLoaderProps) => {
  return <PageStatus
    {...rest}
    IconComponent={RiLoader4Line}
    iconProps={{ className: 'spin primary--text', size: 50 }}
  >{children || 'Loading...'}</PageStatus>;
};

export default PageLoader;
