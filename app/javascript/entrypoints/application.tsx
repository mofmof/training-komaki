import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "../App";
import "virtual:windi.css";
import Cookies from "js-cookie";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const httpLink = new HttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

document.addEventListener("DOMContentLoaded", () => {
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
});
