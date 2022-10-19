module Types
  class MutationType < Types::BaseObject
    field :delete_task, mutation: Mutations::DeleteTask
    field :create_task, mutation: Mutations::CreateTask
  end
end
