module Mutations
  class CreateTask < Mutations::BaseMutation
    field :task, ObjectTypes::TaskType, null: false

    argument :params, InputTypes::Task, required: true

    def resolve(params:)
      task = ::Task.create!(params.to_h)
      { task: }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
