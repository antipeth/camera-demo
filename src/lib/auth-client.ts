import { createAuthClient } from "better-auth/vue";
export const authClient = createAuthClient();

export const { signUp, signIn, signOut } = authClient;
