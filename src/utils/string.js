export function capitalize(text) {
  if (!text || text.length < 1) {
    return text;
  }

  return text.split('').map((c, i) => {
    if (i === 0) {
      return c.toUpperCase();
    }
    return c;
  }).join('');
}

export function camelize(text) {
  const segments = text.split('_').filter(segment => segment && segment.length > 0);

  return segments.map((segment, index) => {
    if (index !== 0) {
      return capitalize(segment);
    }
    return segment;
  }).join('');
}
