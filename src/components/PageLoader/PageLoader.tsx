import React from 'react';
import styled from '@emotion/styled';

interface PageLoaderProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const PageLoaderStyled = styled.div<Omit<PageLoaderProps, 'children'>>`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;

  ${({ inline }) =>
    !inline
      ? `
    position: fixed;
    z-index: 1000;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
  `
      : ''}
`;

const PageLoader = ({ children, ...rest }: PageLoaderProps) => {
  return <PageLoaderStyled {...rest}>{children || 'Loading...'}</PageLoaderStyled>;
};

export default PageLoader;
