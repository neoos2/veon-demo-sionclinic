// Mobile menu: toggle, Esc, focus kept inside while open, closes after choosing an anchor.
const btn = document.querySelector<HTMLButtonElement>(".burger");
const menu = document.getElementById("menu");
const header = document.getElementById("site-header");
if (btn && menu && header) {
  const mq = window.matchMedia("(min-width: 1320px)");
  const focusables = () =>
    [header.querySelector<HTMLElement>(".logo"), ...Array.from(menu.querySelectorAll<HTMLElement>("a[href], [tabindex='0']")), btn].filter(Boolean) as HTMLElement[];
  const set = (open: boolean) => {
    btn.setAttribute("aria-expanded", String(open));
    document.documentElement.classList.toggle("menu-open", open);
    if (open) menu.querySelector<HTMLElement>("a")?.focus();
  };
  const isOpen = () => btn.getAttribute("aria-expanded") === "true";
  btn.addEventListener("click", () => set(!isOpen()));
  menu.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).closest("a")) set(false);
  });
  document.addEventListener("keydown", (e) => {
    if (!isOpen()) return;
    if (e.key === "Escape") { set(false); btn.focus(); return; }
    if (e.key === "Tab") {
      const f = focusables();
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  mq.addEventListener("change", () => { if (mq.matches) set(false); });
}
