import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  /**
   * If true (default), once the element has been in view,
   * we keep hasBeenInView = true and stop observing.
   * If false, it will toggle based on visibility.
   */
  once?: boolean;
}

export const useIntersectionObserver = (
  {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    once = true,
  }: UseIntersectionObserverOptions = {}
): { ref: React.MutableRefObject<any>; hasBeenInView: boolean } => {
  // 👇 use any so it can be attached to ANY JSX element without TS whining
  const ref = useRef<any>(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasBeenInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setHasBeenInView(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, once]);

  return { ref, hasBeenInView };
};
