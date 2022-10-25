module Queries
  class Task < Queries::BaseQuery
    type ObjectTypes::TaskType, null: false
    argument :id, ID, required: true

    def resolve(id:)
      ::Task.joins(:status).find(id)
    end
  end
end
