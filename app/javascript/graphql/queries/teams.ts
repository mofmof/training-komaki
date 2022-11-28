import { gql } from "@apollo/client";

export const FETCH_TEAMS = gql`
  query FetchTeams {
    teams {
      id
      name
      ownerId
    }
  }
`;
