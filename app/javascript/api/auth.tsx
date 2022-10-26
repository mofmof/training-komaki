import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";
import Cookies from "js-cookie";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL:
      import.meta.env.VITE_NODE_ENV === "production"
        ? import.meta.env.VITE_API_BASE_URL
        : "http://localhost:3000",
  }),
  options
);

interface signUpParams {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface signInParams {
  email: string;
  password: string;
}

// SignUp
export const signUp = (params: signUpParams) => {
  return client.post("/auth", params);
};

// SignIn
export const signIn = (params: signInParams) => {
  return client.post("/auth/sign_in", params);
};

// SignOut
export const signOut = () => {
  return client.delete("/auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// CurrentUser
export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;

  return client.get("/auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
