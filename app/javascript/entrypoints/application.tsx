import * as React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "../App";
import "virtual:windi.css";
import Cookies from "js-cookie";
import { createUploadLink } from "apollo-upload-client";
import { relayStylePagination } from "@apollo/client/utilities";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

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
  link: authLink.concat(
    createUploadLink({
      uri: "/graphql",
    })
  ),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          tasks: {
            keyArgs: false,
            merge: true,
          },
        },
      },
    },
  }),
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
