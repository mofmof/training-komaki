module Queries
  class Tasks < Queries::BaseQuery
    type [ObjectTypes::TaskType], null: false

    def resolve
      ::Task.all.order(limit_on: :asc).order(created_at: :desc)
    end
  end
end
