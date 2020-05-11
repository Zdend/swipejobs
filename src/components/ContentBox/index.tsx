import styled from '@emotion/styled';
import { BREAKPOINT } from '@/shared/theme';

const ContentBox = styled.div`
  width: 100%;
  max-width: ${BREAKPOINT.lg};
  margin: 0 auto;
  display: flex;
  height: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  & > * {
    flex: 1 1 auto;
  }
`;

export default ContentBox;
