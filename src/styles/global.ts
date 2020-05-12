import { css } from '@emotion/core';
import { COLORS, REM, BASE_UNIT } from '@/shared/theme';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,800&display=swap');

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-size: ${REM}px;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue,
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

  ${Object.entries(COLORS).map(([name, variants]) => {
    return `
      .${name.toLocaleLowerCase()}--text {
        color: ${variants[5]};
      }
    `;
  })}

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spin {
    animation: spin 1.5s linear 0s infinite;
  }

  .caption {
    font-size: 0.65rem;
  }
`;
