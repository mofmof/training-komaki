import { gql } from "@apollo/client";

export const FETCH_TEAM_TASKS = gql`
  query FetchTeamTasks(
    $first: Int
    $last: Int
    $before: String
    $after: String
    $teamId: ID!
    $ownerId: ID
  ) {
    teamTasks(
      first: $first
      last: $last
      before: $before
      after: $after
      teamId: $teamId
      ownerId: $ownerId
    ) {
      edges {
        node {
          id
          title
          detail
          limitOn
          status {
            id
            name
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;
