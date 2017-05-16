/**
 * Get random number between min and max
 * @param floor Minimum value (included)
 * @param ceiling Maximum value (excluded)
 */

export const getRandom = (floor: number, ceiling: number) => {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
};

