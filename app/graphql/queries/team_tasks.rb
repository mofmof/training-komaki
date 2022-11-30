module Queries
  class TeamTasks < Queries::AuthRequiredQuery
    type ObjectTypes::TaskType.connection_type, null: false

    argument :team_id, ID, required: true
    argument :owner_id, ID, required: false

    def resolve(team_id:, owner_id: nil, **args)
      tasks = ::Tasks
                .where(team_id: team_id)
                .order(limit_on: :asc, created_at: :desc)
      tasks = tasks.where(owner_id: owner_id) if owner_id.present?
      tasks
    end
  end
end
