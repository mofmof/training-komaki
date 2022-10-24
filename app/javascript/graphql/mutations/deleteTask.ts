import { gql } from "@apollo/client";

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(input: { id: $id }) {
      id
    }
  }
`;
