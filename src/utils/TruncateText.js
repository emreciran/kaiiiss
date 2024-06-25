// Function to cut texts to a certain size

export const Truncate = (str, size) => {
  return str.length > size ? str.substring(0, size) + "..." : str;
};
