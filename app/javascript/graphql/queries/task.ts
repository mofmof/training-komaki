import { gql } from "@apollo/client";

export const FETCH_TASK_BY_ID = gql`
  query FetchTaskById($id: ID!) {
    task(id: $id) {
      id
      title
      detail
      limitOn
      statusId
      ownerId
      status {
        id
        name
      }
      owner {
        id
        name
      }
    }
  }
`;
