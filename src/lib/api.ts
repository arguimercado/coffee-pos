


const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export const api = {
  auth: {
    oAuthSignIn: ({
                    user,
                    provider,
                    providerAccountId,
                  }: SignInWithOAuthParams) =>
      fetchHandler(`${API_BASE_URL}/auth/signin-with-oauth`, {
        method: "POST",
        body: JSON.stringify({ user, provider, providerAccountId }),
      }),
  },
}