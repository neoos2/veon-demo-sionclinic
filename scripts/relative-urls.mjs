// Single-page demo: make asset URLs relative so dist/index.html also opens from file:// (screenshots, offline preview).
import fs from "node:fs";
import path from "node:path";
const dist = path.resolve("dist");
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
for (const f of walk(dist)) {
  if (f.endsWith(".html")) {
    const s = fs.readFileSync(f, "utf8").replace(/(href|src)="\/(_astro|img)\//g, '$1="./$2/');
    fs.writeFileSync(f, s);
  } else if (f.endsWith(".css")) {
    const s = fs.readFileSync(f, "utf8").replace(/url\(\/_astro\//g, "url(./");
    fs.writeFileSync(f, s);
  }
}
