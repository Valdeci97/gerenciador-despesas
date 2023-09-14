import { useEffect, useLayoutEffect } from 'react';

const windowType = typeof window !== 'undefined';

export const useIsomorphicEffect = windowType ? useLayoutEffect : useEffect;
