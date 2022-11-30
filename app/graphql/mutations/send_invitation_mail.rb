module Mutations
  class SendInvitationMail < Mutations::BaseMutation
    field :message, String, null: false

    argument :email, String, required: true
    argument :team_id, ID, required: true

    def resolve(email:, team_id:)
      team = current_user.created_teams.find(team_id)
      invitation = team.invitaitons.create!(email: email, token: Nanoid.generate)
      InviteMailer.invite_to_team(invitation).deliver_now
      { message: "招待メールを送信しました。" }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
