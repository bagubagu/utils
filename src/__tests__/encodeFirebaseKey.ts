import { encodeFirebaseKey, decodeFirebaseKey } from "../";

test("Email is encoded correctly", () => {
    expect(encodeFirebaseKey("louis.larry@gmail.com")).toBe("louis%2Elarry%40gmail%2Ecom");
});

test("Decoded back to its original email", () => {
    expect(decodeFirebaseKey("louis%2Elarry%40gmail%2Ecom")).toBe("louis.larry@gmail.com");
});
