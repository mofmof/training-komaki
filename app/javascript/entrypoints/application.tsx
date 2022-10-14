import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const httpLink = new HttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

document.addEventListener("DOMContentLoaded", () => {
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>
  );
});
