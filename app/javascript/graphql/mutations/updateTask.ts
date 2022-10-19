import { gql } from "@apollo/client";

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $params: TaskInput!) {
    updateTask(input: { id: $id, params: $params }) {
      task {
        id
        title
        detail
        limitOn
      }
    }
  }
`;
