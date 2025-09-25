import type { MouseEvent, TouchEvent } from 'react';

//! TODO: remove

const isTouch = (e: MouseEvent | TouchEvent<HTMLHeadingElement>): e is TouchEvent<HTMLHeadingElement> =>
  'touches' in e;

export const guardEvent = (e: MouseEvent | TouchEvent<HTMLHeadingElement>) => {
  return isTouch(e) ? e.touches[0] : e;
};
