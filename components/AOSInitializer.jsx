"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AOSInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    // Lazy load AOS to improve initial page load
    const loadAOS = async () => {
      try {
        const AOS = (await import("aos")).default;
        await import("aos/dist/aos.css");

        AOS.init({
          duration: 1200,
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
          delay: 100,
        });
      } catch (error) {
        console.warn("AOS failed to load:", error);
      }
    };

    // Load AOS after a short delay to prioritize critical rendering
    const timer = setTimeout(loadAOS, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
