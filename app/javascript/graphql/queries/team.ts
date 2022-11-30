import { gql } from "@apollo/client";

export const FETCH_TEAM_BY_ID = gql`
  query FetchTeamById($id: ID!) {
    team(id: $id) {
      id
      name
    }
  }
`;
