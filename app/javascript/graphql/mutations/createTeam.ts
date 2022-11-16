import { gql } from "@apollo/client";

export const CREATE_TEAM = gql`
  mutation CreateTeam($name: String!) {
    createTeam(input: { name: $name }) {
      team {
        id
        name
        ownerId
      }
    }
  }
`;
