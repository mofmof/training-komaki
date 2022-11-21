module Mutations
  class CreateTeam < Mutations::BaseMutation
    field :team, ObjectTypes::TeamType, null: false

    argument :name, String, required: true

    def resolve(name:)
      ActiveRecord::Base.transaction do
        current_user.created_teams.create!(name: name).tap do |team|
          team.users << current_user
        end
      end
      { team: current_user.created_teams.last }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
