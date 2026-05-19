"use client";

import { useEffect } from "react";

/**
 * Cinematic in-page navigation.
 *
 * Intercepts clicks on `<a href="#id">` anchors and replaces the
 * browser's default jump (or its undisclosed smooth-scroll curve)
 * with a hand-tuned expo-out scroll that matches the rest of the
 * site's motion system. Honors prefers-reduced-motion with an
 * instant jump (still avoids the harsh browser default).
 */
export function SmoothAnchors() {
  useEffect(() => {
    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let rafId = 0;
    let cancelled = false;

    const cancelInflight = () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
    };

    // If the user starts scrolling manually, abort our scripted scroll.
    const onUserScroll = (event: WheelEvent | TouchEvent) => {
      if (event.isTrusted) cancelInflight();
    };

    const scrollTo = (targetY: number, distance: number) => {
      cancelInflight();
      cancelled = false;

      const startY = window.scrollY;
      const delta = targetY - startY;

      // Duration scales with distance (snappier for short hops,
      // more cinematic for long sweeps) but capped on both ends.
      const dist = Math.abs(delta);
      const duration = Math.max(
        700,
        Math.min(1600, 600 + Math.sqrt(dist) * 18),
      );

      // Tiny distance? Just jump.
      if (dist < 6) {
        window.scrollTo(0, targetY);
        return;
      }

      const startTime = performance.now();

      const tick = (now: number) => {
        if (cancelled) return;
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const eased = easeOutExpo(t);
        window.scrollTo(0, startY + delta * eased);
        if (t < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      window.addEventListener("wheel", onUserScroll, {
        passive: true,
        once: true,
      });
      window.addEventListener("touchmove", onUserScroll, {
        passive: true,
        once: true,
      });

      rafId = requestAnimationFrame(tick);

      // Silently keep the URL in sync without re-triggering scroll.
      void distance;
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;

      const id = decodeURIComponent(href.slice(1));
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();

      // Find the actual top of the target relative to document.
      const rect = target.getBoundingClientRect();
      const absoluteTop = rect.top + window.scrollY;

      // Account for the fixed navbar (~80px) — give a little breathing room.
      const offset = id === "top" ? 0 : 8;
      const targetY = Math.max(0, absoluteTop - offset);

      if (reducedMotion.matches) {
        window.scrollTo(0, targetY);
      } else {
        scrollTo(targetY, Math.abs(targetY - window.scrollY));
      }

      // Update hash without scroll.
      history.replaceState(null, "", id === "top" ? " " : `#${id}`);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelInflight();
      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchmove", onUserScroll);
    };
  }, []);

  return null;
}
