module Queries
  class Statuses < Queries::BaseQuery
    type [ObjectTypes::StatusType], null: false

    def resolve
      ::Status.all
    end
  end
end
