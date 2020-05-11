import { renderHook } from '@testing-library/react-hooks';
import { useImage } from './useImage';

describe('useImage', () => {
  it('returns loading state of the image', async () => {
    const { result } = renderHook(() => useImage('//fake.url'));
    expect(result.current).toEqual([false, '//fake.url']);
  });

  it('never loads the image if empty', () => {
    const { result } = renderHook(() => useImage(''));
    expect(result.current).toEqual([false, '']);
  });
});
