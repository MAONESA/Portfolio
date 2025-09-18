// src/hooks/useIsMobile.js
import { useEffect, useState } from "react";

/**
 * Detecta móvil de forma práctica:
 * - pointer:coarse (táctil)
 * - ancho <= 768px
 * - userAgent de móvil (fallback)
 */
export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mqCoarse = window.matchMedia("(pointer: coarse)");
    const mqWidth  = window.matchMedia("(max-width: 768px)");
    const ua = navigator.userAgent || navigator.vendor || "";

    const byUA = /android|iphone|ipad|ipod|iemobile|mobile/i.test(ua);
    const compute = () => setIsMobile(mqCoarse.matches || mqWidth.matches || byUA);

    compute();
    mqCoarse.addEventListener?.("change", compute);
    mqWidth.addEventListener?.("change", compute);
    return () => {
      mqCoarse.removeEventListener?.("change", compute);
      mqWidth.removeEventListener?.("change", compute);
    };
  }, []);

  return isMobile;
}
