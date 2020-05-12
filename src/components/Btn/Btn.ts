import styled from '@emotion/styled';
import { COLORS, BORDER_RADIUS_MEDIUM, SHADES, BtnColorType } from '@/shared/theme';

interface BtnBaseProps {
  color: BtnColorType;
}

const ButtonStyled = styled.button<BtnBaseProps>`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: none;
  border: none;
  font-weight: 300;
  border-radius: ${BORDER_RADIUS_MEDIUM}px;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  ${({ color }) => `
    color: ${color === BtnColorType.PRIMARY ? SHADES.WHITE : COLORS.GREY[5]};
    border: 2px solid ${color === BtnColorType.PRIMARY ? SHADES.BLACK : COLORS.GREY[5]};
    background-color: ${color === BtnColorType.PRIMARY ? SHADES.BLACK : SHADES.WHITE};
    &:hover, &:focus {
      background-color: ${color === BtnColorType.PRIMARY ? COLORS.SUCCESS[5] : COLORS.ERROR[5]};
      border-color: ${color === BtnColorType.PRIMARY ? COLORS.SUCCESS[5] : COLORS.ERROR[5]};
      outline: none;
      color: ${SHADES.WHITE};
    }
    &:active {
      background-color: ${color === BtnColorType.PRIMARY ? COLORS.SUCCESS[7] : COLORS.ERROR[7]};
      border-color: ${color === BtnColorType.PRIMARY ? COLORS.SUCCESS[7] : COLORS.ERROR[7]};
    }
  `}
  &[disabled] {
    background-color: ${COLORS.DARK[0]};
    border-color: ${COLORS.DARK[0]};
    color: ${SHADES.WHITE};
    cursor: not-allowed;
  }
`;

export default ButtonStyled;
