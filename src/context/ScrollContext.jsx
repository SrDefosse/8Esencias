import React, { createContext, useContext, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [smoother, setSmoother] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const smootherInstance = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: true,
      });
      setSmoother(smootherInstance);
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <ScrollContext.Provider value={smoother}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
