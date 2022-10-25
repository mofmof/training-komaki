import { gql } from "@apollo/client";

export const FETCH_STATUSES = gql`
  query FetchStatuses {
    statuses {
      id
      name
    }
  }
`;
