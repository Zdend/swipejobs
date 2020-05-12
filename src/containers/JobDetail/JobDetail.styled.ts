import styled from '@emotion/styled';
import { SHADES, BORDER_RADIUS_MEDIUM, COLORS } from '@/shared/theme';
import { boxPaddingPartial } from './utils';

export const JobDetailWrapper = styled.div`
  background-color: ${SHADES.WHITE};
  border-radius: ${BORDER_RADIUS_MEDIUM}px;
  width: 100%;
  margin: 1rem auto;
  overflow: hidden;
`;

export const JobDetailBanner = styled.div<{ src: string; contain?: boolean }>`
  height: 250px;
  ${({ src, contain }) => `
  background: ${COLORS.GREY[2]} url(${src}) no-repeat center center;
  background-size: ${contain ? '80%' : 'cover'};
  `}
`;

export const JobDetailSummary = styled.div`
  ${boxPaddingPartial};
`;

export const JobDetailNumeration = styled.div`
  background-color: ${COLORS.SUCCESS[5]};
  ${boxPaddingPartial};
  display: flex;
`;

export const JobDetailNumerationPanel = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex: 1 1 100%;
  }
`;

export const JobDetailNumerationLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 900;
`;

export const JobDetailNumerationValue = styled.div`
  color: ${SHADES.WHITE};
  font-size: 1.5rem;
  font-weight: 900;
`;

export const JobDetailInfoPanels = styled.div`
  ${boxPaddingPartial};
  & > * + * {
    border-top: 1px solid ${COLORS.GREY[0]};
    margin: 1rem auto;
    padding-top: 1rem;
  }
`;

export const JobDetailActions = styled.div`
  ${boxPaddingPartial};
  padding-bottom: 1rem;
  display: flex;
  & > :first-of-type {
    margin-right: 0.5rem;
  }
  & > * {
    flex: 1;
  }
`;
