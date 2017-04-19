
export const encodeFirebaseKey = (key): string => {
    return encodeURIComponent(key).replace(/\./g, "%2E");
};

export const decodeFirebaseKey = (encodedKey): string => {
    return decodeURIComponent(encodedKey);
};
