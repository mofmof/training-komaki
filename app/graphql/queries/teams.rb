module Queries
  class Teams < Queries::BaseQuery
    type [ObjectTypes::TeamType], null: false

    def resolve
      current_user.teams
    end
  end
end
