import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { COLORS, BORDER_RADIUS_MEDIUM } from '@/shared/theme';

const modalRoot = document.getElementById('modal-root');

interface NotificationProps {
  children: React.ReactNode;
  color: 'SUCCESS' | 'ERROR';
}

const NotificationWrapper = styled.div<NotificationProps>`
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  width: 300px;
  margin: 0 auto;
  border-radius: ${BORDER_RADIUS_MEDIUM}px;
  z-index: 1000;
  padding: 0.5rem;
  font-size: 0.8rem;
  ${({ color }) => `
  background-color: ${COLORS[color][5]};
  `}
  box-shadow: 0px 3px 7px -1px rgba(0,0,0,0.75);
`;

const Notification = (props: NotificationProps) => {
  return ReactDOM.createPortal(<NotificationWrapper {...props} />, modalRoot);
};

export default Notification;
