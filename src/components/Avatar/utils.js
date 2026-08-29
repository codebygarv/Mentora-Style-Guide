// Deterministic illustrated monogram generator.
// Same full name always produces the same initials + gradient; different
// names are distributed across a small curated, on-brand palette so no
// two distinct people can accidentally render identically, and no person
// depends on a hand-picked stock photo that might get reused elsewhere.

const GRADIENT_PAIRS = [
  ['#1D75FE', '#3B82F6'], // primary-500 -> 400
  ['#1E3A8A', '#1D75FE'], // primary-800 -> 500
  ['#0B1229', '#1E40AF'], // primary-950 -> 600
  ['#18181B', '#334155'], // obsidian -> slate-700 (neutral variant)
  ['#1D4ED8', '#60A5FA'], // primary-700 -> 400
];

function hashName(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h << 5) - h + name.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function getAvatarStyle(fullName) {
  const safeName = (fullName || '').trim();
  const hash = hashName(safeName.toLowerCase());
  const [from, to] = GRADIENT_PAIRS[hash % GRADIENT_PAIRS.length];

  const parts = safeName.split(/\s+/).filter(Boolean);
  const initials = (
    (parts[0]?.[0] || '') + (parts[1]?.[0] || parts[0]?.[1] || '')
  ).toUpperCase();

  return {
    initials: initials || '?',
    gradient: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
  };
}
