module Queries
  class Tasks < Queries::AuthRequiredQuery
    type ObjectTypes::TaskType.connection_type, null: false

    def resolve
      current_user.tasks.order(limit_on: :asc, created_at: :desc)
    end
  end
end
