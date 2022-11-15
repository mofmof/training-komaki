import { gql } from "@apollo/client";

export const UPDATE_NOTIFICATION_FLG = gql`
  mutation UpdateNotificationFlg($notificationFlg: String!) {
    updateNotificationFlg(input: { notificationFlg: $notificationFlg }) {
      result
    }
  }
`;
