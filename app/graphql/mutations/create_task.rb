module Mutations
  class CreateTask < BaseMutation
    field :task, ObjectTypes::TaskType, null: false

    argument :title, String, required: true
    argument :detail, String, required: false
    argument :limit_on, GraphQL::Types::ISO8601Date, required: true

    def resolve(**params)
      task = ::Task.create!(params)
      { task: task }
    end
  end
end
