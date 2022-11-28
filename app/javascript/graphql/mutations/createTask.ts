import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation CreateTask($params: TaskInput!) {
    createTask(input: { params: $params }) {
      task {
        id
        title
        detail
        limitOn
        statusId
        userId
        teamId
      }
    }
  }
`;
