import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query FetchUsers {
    users {
      id
      name
      email
    }
  }
`;
