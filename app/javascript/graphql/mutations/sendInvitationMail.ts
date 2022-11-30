import { gql } from "@apollo/client";

export const SEND_INVITATION_MAIL = gql`
  mutation SendInvitationMail($email: String!, $teamId: ID!) {
    sendInvitationMail(input: { email: $email, teamId: $teamId }) {
      message
    }
  }
`;
