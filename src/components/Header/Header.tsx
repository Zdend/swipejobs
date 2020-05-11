import React from 'react';
import styled from '@emotion/styled';
import { BASE_UNIT, SHADES } from '@/shared/theme';

const HeaderWrapper = styled.div`
  height: ${BASE_UNIT * 20}px;
  background-color: ${SHADES.BLACK};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
`;

const HeaderLogo = styled.img`
  max-height: 50%;
  max-width: 50%;
`;

const HeaderExtension = styled.div`
  flex-grow: 1;
  flex-wrap: nowrap;
  color: ${SHADES.WHITE};
  display: flex;
  justify-content: flex-end;
  justify-items: flex-end;
`;

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children, ...rest }: HeaderProps) => {
  return (
    <HeaderWrapper {...rest}>
      <HeaderLogo src="/images/logo.png" />
      <HeaderExtension>{children}</HeaderExtension>
    </HeaderWrapper>
  );
};

export default Header;
