import { gql } from "@apollo/client";

export const PARTICIPATE_TEAM = gql`
  mutation ParticipateTeam($id: ID!, $token: String!) {
    participateTeam(input: { id: $id, token: $token }) {
      message
    }
  }
`;
