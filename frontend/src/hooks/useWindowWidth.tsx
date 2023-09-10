import { useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

const MOBILE_DEVICE_MAX_WIDTH_IN_PX = 768;

export function useWindowWidth(): { isMobileDevice: boolean } {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const getDeviceWidth = useCallback(() => {
    const { innerWidth } = window;
    setWindowWidth(innerWidth);
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('resize', getDeviceWidth);
    getDeviceWidth();

    return () => {
      window.removeEventListener('resize', getDeviceWidth);
    };
  }, [getDeviceWidth]);

  const isMobileDevice = windowWidth <= MOBILE_DEVICE_MAX_WIDTH_IN_PX;
  return { isMobileDevice };
}
