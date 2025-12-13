// /js/catData.js
export async function loadCategories() {
  if (window.__CATS__) return window.__CATS__;
  const res = await fetch('../data/categories.json?v=1', { cache: 'no-store' });
  if (!res.ok) throw new Error('Unable to load categories.json');
  const json = await res.json();
  const list = Array.isArray(json.categories) ? json.categories : [];
  window.__CATS__ = list;
  window.__CATMAP__ = Object.fromEntries(list.map(c => [c.id, c]));
  window.__CURRENCY__ = json.currency || 'PKR';
  return list;
}
export function categoryMap() { return window.__CATMAP__ || {}; }
export function currency(n) {
  return `₨ ${Number(n || 0).toLocaleString('en-PK')} PKR`;
}
export function getCategoryById(id) {
  return (window.__CATMAP__ && window.__CATMAP__[id]) || null;
}
