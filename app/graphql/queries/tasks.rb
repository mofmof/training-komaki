module Queries
  class Tasks < Queries::BaseQuery
    type [ObjectTypes::TaskType], null: false

    def resolve
      ::Task.all
    end
  end
end
