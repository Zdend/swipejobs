import { css } from '@emotion/core';
import { COLORS, REM, BASE_UNIT } from '@/shared/theme';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700,800&display=swap');

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-size: ${REM}px;
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue,
      Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol,
      noto color emoji;
  }

  h1 {
    font-size: ${BASE_UNIT * 8}px;
    font-weight: 800;
    line-height: 1.5;
  }

  h2 {
    font-size: ${BASE_UNIT * 6}px;
    font-weight: 700;
    line-height: 1.5;
  }

  h3 {
    font-size: ${BASE_UNIT * 5}px;
    font-weight: 700;
    line-height: 1.5;
  }

  a {
    color: ${COLORS.PRIMARY[5]};
    text-decoration: underline;
  }

  ${Object.entries(COLORS).map(([name, variants]) => {
    return `
      .${name.toLocaleLowerCase()}--text {
        color: ${variants[5]};
      }
    `;
  })}
`;
