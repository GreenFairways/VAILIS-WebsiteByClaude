'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function CountUp({
  end,
  suffix = '',
  prefix = '',
  duration = 600,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const step = end / (duration / 16);
    let current = 0;
    const isDecimal = end % 1 !== 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  const display = count % 1 === 0 ? count.toLocaleString() : count.toFixed(1);
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
