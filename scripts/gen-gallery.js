import fs from 'fs';
import path from 'path';

const base = path.resolve('public', 'images');
const categories = ['plumbing', 'electrical', 'interior'];
const items = [];
let id = 1;
const safe = (s) => encodeURIComponent(s).replace(/%2F/g, '/');
const exts = ['.jpg', '.jpeg', '.png', '.jfif', '.webp', '.gif'];
const list = (dir) => {
  try {
    return fs.readdirSync(dir).filter((name) => exts.includes(path.extname(name).toLowerCase()));
  } catch {
    return [];
  }
};

for (const category of categories) {
  const dir = path.join(base, category);
  const files = list(dir);
  for (const file of files) {
    items.push({
      id: `${category}-${id++}`,
      file: `/images/${category}/${safe(file)}`,
      alt: `${category} project photo`,
      category,
      title: `${category} project`,
    });
  }
}

for (const file of list(base)) {
  items.push({
    id: `top-${id++}`,
    file: `/images/${safe(file)}`,
    alt: 'site image',
    category: 'pop',
    title: file,
  });
}

const out = [];
out.push('// Generated gallery items from public/images');
out.push('export const galleryItems = [');
for (const item of items) {
  out.push(`  ${JSON.stringify(item)},`);
}
out.push('];');
out.push('');
out.push('export const categories = [');
out.push("  { id: 'all', label: 'All Work' },");
out.push("  { id: 'plumbing', label: 'Plumbing' },");
out.push("  { id: 'electrical', label: 'Electrical' },");
out.push("  { id: 'interior', label: 'Interior' },");
out.push("  { id: 'pop', label: 'POP & Ceiling' },");
out.push('];');

fs.writeFileSync(path.resolve('src', 'data', 'gallery.js'), out.join('\n'));
console.log(`Wrote ${items.length} gallery items to src/data/gallery.js`);
