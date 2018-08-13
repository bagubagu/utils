/**
 * Get random number between min and max
 * @param min Minimum value (included)
 * @param max Maximum value (included)
 */

export const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
