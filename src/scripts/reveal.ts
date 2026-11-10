// Motion hooks. Content is visible without JS and with prefers-reduced-motion.
// [data-track]  -> track segment grows down when the section enters the viewport
// [data-reveal] -> generic fade/scale in (process stations use it with a stagger)
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const items = document.querySelectorAll<HTMLElement>("[data-reveal], [data-track]");
if (reduce || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
  );
  items.forEach((el) => io.observe(el));
}

// Bottom action bar (mobile): shown once the hero buttons have left the screen.
const bar = document.getElementById("mbar");
const heroActions = document.getElementById("hero-actions");
if (bar && heroActions && "IntersectionObserver" in window) {
  const bo = new IntersectionObserver(([entry]) => {
    const gone = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    bar.classList.toggle("is-shown", gone);
  });
  bo.observe(heroActions);
}
