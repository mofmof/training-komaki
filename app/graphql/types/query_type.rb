module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :tasks, resolver: Queries::Tasks
    field :task, resolver: Queries::Task
    field :statuses, resolver: Queries::Statuses
    field :users, resolver: Queries::Users
    field :teams, resolver: Queries::Teams
  end
end
