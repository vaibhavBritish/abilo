import { useEffect, useRef } from 'react';

/**
 * useScrollReveal – adds "visible" class to elements with
 * .reveal / .reveal-left / .reveal-right when they enter the viewport.
 * Uses MutationObserver to automatically detect and observe new elements.
 */
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observeElements = (root) => {
      const elements = root.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      elements.forEach((el) => observer.observe(el));
    };

    const root = ref.current || document;
    observeElements(root);

    // MutationObserver to catch dynamically added elements (like filtered items)
    const mutationObserver = new MutationObserver(() => {
      observeElements(root);
    });

    mutationObserver.observe(root, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []); // Constant size dependency array

  return ref;
}
