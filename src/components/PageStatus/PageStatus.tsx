import React from 'react';
import ContentBox from '../ContentBox';
import styled from '@emotion/styled';
import { IconType, IconBaseProps } from 'react-icons';

const PageStatusWrapper = styled.div<{ inline?: boolean }>`
  display: flex;
  ${({ inline }) => `
  flex-flow: ${inline ? 'row' : 'column'};
  `}
  justify-content: center;
  align-items: center;
`;

interface PageStatusProps {
  IconComponent: IconType;
  iconProps?: IconBaseProps;
  children: React.ReactNode;
  inline?: boolean;
}

const PageStatus = ({
  IconComponent,
  iconProps,
  children,
  inline
}: PageStatusProps) => {
  const targetIconProps = { 
    size: 100, 
    className: 'primary--text',
    ...iconProps,
  };
  return (
    <ContentBox>
      <PageStatusWrapper inline={inline}>
        <div><IconComponent {...targetIconProps} /></div>
        <div>{children}</div>
      </PageStatusWrapper>
    </ContentBox>
  );
};

export default PageStatus;