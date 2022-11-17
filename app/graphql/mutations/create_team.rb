module Mutations
  class CreateTeam < Mutations::BaseMutation
    field :team, ObjectTypes::TeamType, null: false

    argument :name, String, required: true

    def resolve(name:)
      team = current_user.teams.create!(name: name, owner_id: current_user.id)
      { team: }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
