import { useCallback, useEffect, useRef } from "react";

const DefaultScrollBehaviour: ScrollIntoViewOptions = {
  behavior: "smooth",
  inline: "center",
  block: "center",
};

export default function useScrollIntoView<T extends HTMLElement>(
  condition: boolean,
  timeout = 0,
  behaviour: ScrollIntoViewOptions = DefaultScrollBehaviour
) {
  const ref = useRef<T>();

  const scrollAction = useCallback(() => {
    if (ref.current && condition) {
      ref.current.scrollIntoView(behaviour);
    }
  }, [ref, behaviour, condition]);

  useEffect(() => {
    setTimeout(() => scrollAction(), timeout);
  }, [scrollAction, timeout]);

  return ref;
}
