import { validateLogin } from "@/app/auth";

describe("Login Validation", () => {
    it("should succeed with correct credentials", () => {
        expect(validateLogin("pbokutosan@gmail.com", "bokutokoutarou")).toBe(true);
    });

    it("should ignore case by converting to lowercase", () => {
        expect(validateLogin("PbOkUtOsAn@GmAiL.cOm", "BoKuToKoUtArOu")).toBe(true);
    });

    it("should fail with wrong username", () => {
        expect(validateLogin("wrong@gmail.com", "bokutokoutarou")).toBe(false);
    });

    it("should fail with wrong password", () => {
        expect(validateLogin("pbokutosan@gmail.com", "wrongpass")).toBe(false);
    });
});
