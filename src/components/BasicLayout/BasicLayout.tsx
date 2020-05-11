import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import ContentBox from '../ContentBox';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

interface BasicLayoutProps {
  title: string;
  children: React.ReactNode;
}

const BasicLayout = ({ title, children, ...rest }: BasicLayoutProps) => {
  return (
    <PageWrapper {...rest}>
      <Header data-testid="basic-layout__header">{title}</Header>
      <ContentBox className="flex-grow" data-testid="basic-layout__content">
        <main>{children}</main>
      </ContentBox>
    </PageWrapper>
  );
};

export default BasicLayout;
