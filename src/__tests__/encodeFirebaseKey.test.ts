import { encodeFirebaseKey, decodeFirebaseKey } from "../";

test("Encode email address", () => {
    expect(encodeFirebaseKey("louis.larry@gmail.com")).toBe("louis%2Elarry%40gmail%2Ecom");
});

test("Decode back to its original email", () => {
    expect(decodeFirebaseKey("louis%2Elarry%40gmail%2Ecom")).toBe("louis.larry@gmail.com");
});
