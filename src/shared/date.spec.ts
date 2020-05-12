import { displayDateAndTime, displayTime } from './date';

describe('displayDateAndTime', () => {
  it.each([
    ['2020-05-12T03:07:53.129Z', 'Tue, May 12, 1:07 PM'],
    ['2021-05-29T03:07:53.129+10:00', 'Sat, May 29, 3:07 AM'],
    ['aaaaa', ''],
    ['', '']
  ])('formats %s date to be %s', (input, output) => {
    expect(displayDateAndTime(input)).toBe(output);
  });
});

describe('displayTime', () => {
  it.each([
    ['2020-05-12T03:07:53.129Z', '1:07 PM GMT+10'],
    ['2020-05-12T03:07:53.129+10:00', '3:07 AM GMT+10'],
    ['aaaaa', ''],
    ['', '']
  ])('formats %s date to be %s', (input, output) => {
    expect(displayTime(input)).toBe(output);
  });
});
