module Mutations
  class UpdateTask < BaseMutation
    field :task, ObjectTypes::TaskType, null: false

    argument :id, ID, required: true
    argument :params, InputTypes::Task, required: true

    def resolve(id:, params:)
      task = ::Task.find(id)
      task.update!(params.to_h)
      { task: }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
