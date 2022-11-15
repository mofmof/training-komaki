import { gql } from "@apollo/client";

export const IMPORT_TASK = gql`
  mutation ImportTask($file: Upload!) {
    importTask(input: { file: $file }) {
      message
    }
  }
`;
