import { renderHook, act } from '@testing-library/react-hooks';
import { useApiCallback } from './useApiCallback';
import { TIMEOUT_DELAY, resolveAsync } from '@/shared-test/async';

jest.useFakeTimers();

describe('useApiCallback', () => {
  it('returns correct loading state', async () => {
    const fetchApi = resolveAsync();
    const { result } = renderHook(() => useApiCallback(fetchApi));

    expect(typeof result.current[0]).toBe('function');
    expect(result.current[1].loading).toEqual(false);
    await act(async () => {
      result.current[0]();
    });
    expect(result.current[1].loading).toEqual(true);
    await act(async () => {
      jest.advanceTimersByTime(TIMEOUT_DELAY);
    });
    expect(result.current[1].loading).toEqual(false);
  });

  it('returns an error', async () => {
    const fetchApi = resolveAsync(true, { code: 'TIMED_OUT' });
    const { result } = renderHook(() => useApiCallback(fetchApi));

    await act(async () => {
      result.current[0]();
      jest.advanceTimersByTime(TIMEOUT_DELAY);
    });
    expect(result.current[1].error).toEqual({ code: 'TIMED_OUT' });
    expect(result.current[1].data).toEqual(null);
  });

  it('returns data', async () => {
    const fetchApi = resolveAsync(false, { success: true });
    const { result } = renderHook(() => useApiCallback(fetchApi));

    await act(async () => {
      result.current[0]();
      jest.advanceTimersByTime(TIMEOUT_DELAY);
    });
    expect(result.current[1].error).toEqual(null);
    expect(result.current[1].data).toEqual({ success: true });
  });
});
