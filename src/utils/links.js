/**
 * A link is usable only when it is set and not still the "TODO" placeholder.
 * Placeholder links are hidden from visitors instead of rendered as disabled stubs.
 */
export const hasLink = (url) => typeof url === 'string' && url.trim() !== '' && url !== 'TODO';
