import { gql } from "@apollo/client";

export const EXPORT_TASK = gql`
  mutation ExportTask {
    exportTask {
      message
    }
  }
`;
