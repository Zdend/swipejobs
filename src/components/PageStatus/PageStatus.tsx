import React from 'react';
import styled from '@emotion/styled';
import { IconType, IconBaseProps } from 'react-icons';
import ContentBox from '../ContentBox';

const PageStatusWrapper = styled.div<{ inline?: boolean }>`
  display: flex;
  ${({ inline }) => `
  flex-flow: ${inline ? 'row' : 'column'};
  `}
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 300;
`;

interface PageStatusProps {
  IconComponent: IconType;
  iconProps?: IconBaseProps;
  children: React.ReactNode;
  inline?: boolean;
}

const PageStatus = ({ IconComponent, iconProps, children, inline, ...rest }: PageStatusProps) => {
  const targetIconProps = {
    size: 100,
    className: 'primary--text',
    ...iconProps
  };
  return (
    <ContentBox {...rest}>
      <PageStatusWrapper inline={inline}>
        <div>
          <IconComponent {...targetIconProps} />
        </div>
        <div>{children}</div>
      </PageStatusWrapper>
    </ContentBox>
  );
};

export default PageStatus;
