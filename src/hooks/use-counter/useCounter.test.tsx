import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useConter';

describe('useCounter', () => {

  test('should render the initial count', () => {
    // const { result } = renderHook(() => useCounter());
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, { initialProps: { initialCount: 11 } });
    expect(result.current.count).toBe(11);
  });

  test('should INCREMENT the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test('should DECREMENT the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
