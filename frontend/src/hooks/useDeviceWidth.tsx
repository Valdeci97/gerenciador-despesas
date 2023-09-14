import { useCallback, useState } from 'react';
import { useIsomorphicEffect } from './useIsomorphicEffect';

const MOBILE_DEVICE_WIDTH_BREAKPOINT_IN_PX = 768;

export function useDeviceWidth(): { isWidthBiggerThanBreakpoint: boolean } {
  const [deviceWidth, setDeviceWidth] = useState<number>(0);
  const getDeviceWidth = useCallback(() => {
    const { innerWidth } = window;
    return setDeviceWidth(innerWidth);
  }, []);

  useIsomorphicEffect(() => {
    window.addEventListener('resize', getDeviceWidth);
    getDeviceWidth();
    return () => {
      window.removeEventListener('resize', getDeviceWidth);
    };
  }, [getDeviceWidth]);

  const isWidthBiggerThanBreakpoint = deviceWidth > MOBILE_DEVICE_WIDTH_BREAKPOINT_IN_PX;
  return { isWidthBiggerThanBreakpoint };
}
