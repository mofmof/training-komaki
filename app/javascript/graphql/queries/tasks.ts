import { gql } from "@apollo/client";

export const FETCH_TASKS = gql`
  query FetchTasks {
    tasks {
      id
      title
      detail
      limitOn
    }
  }
`;
