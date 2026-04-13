"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Reveal on Scroll (fade-up) ── */
export function useReveal<T extends HTMLElement>(
  options?: { delay?: number; y?: number; duration?: number; once?: boolean }
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { delay = 0, y = 60, duration = 0.9, once = true } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y });
    const anim = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, [delay, y, duration, once]);

  return ref;
}

/* ── Stagger children on scroll ── */
export function useStagger<T extends HTMLElement>(
  selector: string,
  options?: { stagger?: number; y?: number; duration?: number }
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { stagger = 0.12, y = 50, duration = 0.8 } = options ?? {};

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(selector);
    if (!children.length) return;

    gsap.set(children, { opacity: 0, y });
    const anim = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
      },
    });

    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, [selector, stagger, y, duration]);

  return ref;
}

/* ── Parallax float effect ── */
export function useParallax<T extends HTMLElement>(
  speed: number = 0.3
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const anim = gsap.to(el, {
      y: () => speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, [speed]);

  return ref;
}

/* ── Counter animation ── */
export function useCounter<T extends HTMLElement>(
  end: number,
  options?: { duration?: number; suffix?: string }
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { duration = 2, suffix = "" } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const anim = gsap.to(obj, {
      val: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      onUpdate: () => {
        el.textContent = Math.round(obj.val) + suffix;
      },
    });

    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, [end, duration, suffix]);

  return ref;
}

/* ── Magnetic hover effect ── */
export function useMagnetic<T extends HTMLElement>(
  strength: number = 0.3
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.3, ease: "power2.out" });
    };

    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}

/* ── Horizontal line reveal ── */
export function useLineReveal<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { scaleX: 0, transformOrigin: "left center" });
    const anim = gsap.to(el, {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });

    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, []);

  return ref;
}
