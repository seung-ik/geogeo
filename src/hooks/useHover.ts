import { useState, useCallback, useRef, useEffect } from 'react';

interface Props {
  onCallback?: () => void;
  offCallback?: () => void;
}

type HoverElement = HTMLDivElement | HTMLSpanElement;

type ReturnValue<T> = [React.MutableRefObject<T> | null, boolean];

export default function useHover<T extends HoverElement>({ onCallback, offCallback }: Props = {}): ReturnValue<T> {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseOver = useCallback(() => {
    if (onCallback) {
      onCallback();
    }
    setIsHover(true);
  }, [onCallback]);

  const handleMouseOut = useCallback(() => {
    if (offCallback) {
      offCallback();
    }
    setIsHover(false);
  }, [offCallback]);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseenter', handleMouseOver);
      node.addEventListener('mouseleave', handleMouseOut);

      return () => {
        node.removeEventListener('mouseenter', handleMouseOver);
        node.removeEventListener('mouseleave', handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, isHover];
}
