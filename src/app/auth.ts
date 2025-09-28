// utils/auth.ts
export function validateLogin(username: string, password: string): boolean {
    const validUsername = "pbokutosan@gmail.com";
    const validPassword = "bokutokoutarou";

    const user = username.toLowerCase();
    const pass = password.toLowerCase();

    return user === validUsername && pass === validPassword;
}