module Queries
  class Team < Queries::BaseQuery
    type ObjectTypes::TeamType, null: false
    argument :id, ID, required: true

    def resolve(id:)
      current_user.teams.find(id)
    end
  end
end
