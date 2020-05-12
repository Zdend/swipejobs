import { renderHook, act } from '@testing-library/react-hooks';
import { useApiData } from './useApiData';
import { TIMEOUT_DELAY, resolveAsync } from '@/shared-test/async';

jest.useFakeTimers();

describe('useApiData', () => {
  it('returns correct loading state', async () => {
    const fetchApi = resolveAsync();
    const { result } = renderHook(() => useApiData(fetchApi));

    expect(result.current.loading).toEqual(true);
    await act(async () => {
      jest.advanceTimersByTime(TIMEOUT_DELAY);
    });
    expect(result.current.loading).toEqual(false);
  });

  it('returns an error', async () => {
    const fetchApi = resolveAsync(true, { code: 'TIMED_OUT' });
    const { result } = renderHook(() => useApiData(fetchApi));

    await act(async () => {
      jest.advanceTimersByTime(TIMEOUT_DELAY);
    });
    expect(result.current.error).toEqual({ code: 'TIMED_OUT' });
    expect(result.current.data).toEqual(null);
  });

  it('returns data', async () => {
    const fetchApi = resolveAsync(false, { success: true });
    const { result } = renderHook(() => useApiData(fetchApi));

    await act(async () => {
      jest.advanceTimersByTime(TIMEOUT_DELAY);
    });
    expect(result.current.error).toEqual(null);
    expect(result.current.data).toEqual({ success: true });
  });
});
