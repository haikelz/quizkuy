import { SetStateAction } from "jotai";
import { Dispatch, RefObject, useCallback, useEffect } from "react";

export function useClickOutside(
  set: Dispatch<SetStateAction<boolean>>,
  ref: RefObject<HTMLDivElement>
) {
  const handleClickOutside = useCallback(
    (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        set(false);
      }
    },
    [set, ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClickOutside]);
}