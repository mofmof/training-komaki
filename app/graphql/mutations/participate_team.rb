module Mutations
  class ParticipateTeam < Mutations::BaseMutation
    field :message, String

    argument :id, ID, required: true
    argument :token, String, required: true

    def resolve(id:, token:)
      team = Team.find(id)
      invitaiton = Invitaiton.find_by(token: token)
      team.users << User.find_by(email: invitaiton.email)
      { message: "チームに参加しました。" }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
