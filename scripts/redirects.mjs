// Writes dist/_redirects from the Astro.redirect pages, so Cloudflare sends real 301s.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = 'src/pages';
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

const lines = [];
for (const file of walk(root).filter((f) => f.endsWith('.astro'))) {
  const m = readFileSync(file, 'utf8').match(/Astro\.redirect\('([^']+)'/);
  if (!m) continue;
  let from = '/' + relative(root, file).split('\\').join('/').replace(/\.astro$/, '');
  from = from.replace(/\/index$/, '') || '/';
  lines.push(`${from} ${m[1]} 301`, `${from}/ ${m[1]} 301`);
}
writeFileSync('dist/_redirects', lines.join('\n') + '\n');
console.log(`_redirects: ${lines.length / 2} redirects`);
