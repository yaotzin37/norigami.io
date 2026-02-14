export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Split accented characters into their base chars and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // Remove all the accents, which happen to be all in the \u03xx range.
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};
