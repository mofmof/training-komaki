module Types
  class MutationType < Types::BaseObject
    field :delete_task, mutation: Mutations::DeleteTask
    field :update_task, mutation: Mutations::UpdateTask
    field :create_task, mutation: Mutations::CreateTask
    field :import_task, mutation: Mutations::ImportTask
    field :export_task, mutation: Mutations::ExportTask
    field :update_notification_flg, mutation: Mutations::UpdateNotificationFlg
    field :create_team, mutation: Mutations::CreateTeam
    field :send_invitation_mail, mutation: Mutations::SendInvitationMail
    field :participate_team, mutation: Mutations::ParticipateTeam
  end
end
