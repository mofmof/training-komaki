import { gql } from "@apollo/client";

export const FETCH_TASKS = gql`
  query FetchTasks($first: Int, $last: Int, $before: String, $after: String) {
    tasks(first: $first, last: $last, before: $before, after: $after) {
      edges {
        node {
          id
          title
          detail
          limitOn
          status {
            id
            name
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;
