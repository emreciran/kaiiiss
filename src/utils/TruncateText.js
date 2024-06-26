/**
 * Truncates a string to a specified length.
 * @param {string} str - The string to truncate.
 * @param {number} size - The maximum length of the truncated string.
 * @returns {string} - The truncated string with ellipsis if applicable.
 */
export const Truncate = (str, size) => {
  return str.length > size ? str.substring(0, size) + "..." : str;
};
