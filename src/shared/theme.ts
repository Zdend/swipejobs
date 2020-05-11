import { generate } from '@ant-design/colors';

export const COLORS = {
  PRIMARY: generate('#09f'),
  SUCCESS: generate('#4CAF50'),
  ERROR: generate('#F44336'),
  WARNING: generate('#FF9800'),
  INFO: generate('#2196F3'),
  GREY: generate('#a5adb7'),
  DARK: generate('#414141')
};

export const SHADES = {
  BLACK: '#000',
  WHITE: '#fff'
};

export const BASE_UNIT = 4;
export const REM = BASE_UNIT * 4;
export const BORDER_RADIUS_MEDIUM = BASE_UNIT;

export enum ColorType {
  PRIMARY = 'PRIMARY',
  ACCENT = 'ACCENT',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INFO = 'INFO'
}

export enum SizeType {
  REGULAR = 'REGULAR',
  SMALL = 'SMALL'
}

export enum BREAKPOINT {
  xs = '575px',
  sm = '576px',
  md = '768px',
  lg = '992px',
  xl = '1200px',
  xxl = '1600px'
}

type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type BreakpointWidth = {
  [key in BreakpointKeys]: number;
};
export const BREAKPOINT_WIDTH: BreakpointWidth = Object.entries(BREAKPOINT).reduce(
  (result, [key, value]) => ({
    ...result,
    [key]: +value.replace('px', '')
  }),
  {}
) as BreakpointWidth;
