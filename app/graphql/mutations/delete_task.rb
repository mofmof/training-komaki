module Mutations
  class DeleteTask < BaseMutation
    field :id, ID, null: false

    argument :id, ID, required: true

    def resolve(id:)
      ::Task.find(id).destroy!
      { id: }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
