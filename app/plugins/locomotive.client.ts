import LocomotiveScroll from "locomotive-scroll";
import type { Router } from "vue-router";
import { nextTick } from "vue";

type ScrollOptions = ConstructorParameters<typeof LocomotiveScroll>[0];

export default defineNuxtPlugin((nuxtApp) => {
  const instance = shallowRef<LocomotiveScroll | null>(null);
  let observer: IntersectionObserver | null = null;

  const destroy = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (!instance.value) return;
    try {
      instance.value.destroy();
    } catch (e) {
      console.warn("Locomotive destroy warning:", e);
    }
    instance.value = null;
  };

  /**
   * Fallback: Native IntersectionObserver to guarantee .is-inview is added
   * even if Locomotive Scroll is re-initializing during route transitions.
   */
  const setupIntersectionObserver = () => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (observer) observer.disconnect();

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
          }
        });
      },
      {
        root: null,
        rootMargin: "50px 0px 50px 0px",
        threshold: 0.05,
      }
    );

    const elements = document.querySelectorAll(
      ".reveal-fade-up, .reveal-fade-in, .reveal-scale, .reveal-slide-right, .reveal-slide-left, [data-scroll]"
    );

    elements.forEach((el) => {
      // Immediate check for top of page elements
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-inview");
      }
      observer?.observe(el);
    });
  };

  const init = (options?: ScrollOptions) => {
    if (import.meta.server) return null;
    destroy();

    instance.value = new LocomotiveScroll(options);
    document.documentElement.classList.add("has-locomotive");

    setupIntersectionObserver();

    nextTick(() => {
      requestAnimationFrame(() => {
        instance.value?.resize();
      });
    });

    return instance.value;
  };

  const resize = () => {
    instance.value?.resize();
    setupIntersectionObserver();
  };

  nuxtApp.hook("app:mounted", () => {
    const router = nuxtApp.$router as Router;

    // Initial load
    init();

    window.addEventListener("resize", () => {
      instance.value?.resize();
    }, { passive: true });

    // Handle SPA page transitions cleanly
    router.afterEach(() => {
      // 350ms matches the 0.3s page-leave/page-enter transition in app.vue
      setTimeout(() => {
        window.scrollTo(0, 0);
        init();

        // Extra recalculation after DOM layout/images stabilize
        setTimeout(() => {
          instance.value?.resize();
          setupIntersectionObserver();
        }, 200);
      }, 350);
    });
  });

  return {
    provide: {
      locomotive: {
        instance,
        init,
        destroy,
        resize,
        start: () => instance.value?.start(),
        stop: () => instance.value?.stop(),
        scrollTo: (target: any, options?: any) => instance.value?.scrollTo(target, options),
      },
    },
  };
});
