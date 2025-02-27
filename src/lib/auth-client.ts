import { createAuthClient } from "better-auth/solid"
export const authClient = createAuthClient();

export const { signUp, signIn, signOut } = authClient;