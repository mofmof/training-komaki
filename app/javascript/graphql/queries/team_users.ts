import { gql } from "@apollo/client";

export const FETCH_TEAM_USERS = gql`
  query FetchTeamUsers($teamId: ID!) {
    teamUsers(teamId: $teamId) {
      id
      name
    }
  }
`;
