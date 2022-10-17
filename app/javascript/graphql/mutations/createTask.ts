import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input)
    task {
      id
      title
      detail
      limitOn
    }
  }
`;
