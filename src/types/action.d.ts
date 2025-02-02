interface SignInWithOAuthParams {
  provider: "github" | "google";
  providerAccountId: string;
  user: {
    email: string;
    image: string;
    name: string;
    username: string;
  };
}

interface AuthCredentials {
   name: string;
   username: string;
   email: string;
   password: string;
 }