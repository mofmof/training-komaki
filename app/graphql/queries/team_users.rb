module Queries
  class TeamUsers < Queries::AuthRequiredQuery
    type [ObjectTypes::UserType], null: false

    argument :team_id, ID, required: true

    def resolve(team_id:, **args)
      team_users = ::Team.find(team_id).users
      team_users
    end
  end
end
