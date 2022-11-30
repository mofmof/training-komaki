module Queries
  class TeamTasks < Queries::AuthRequiredQuery
    type ObjectTypes::TaskType.connection_type, null: false

    argument :team_id, ID, required: true

    def resolve(team_id:, **args)
      tasks = current_user.tasks
                            .where(team_id: team_id)
                            .order(limit_on: :asc, created_at: :desc)
      tasks
    end
  end
end
