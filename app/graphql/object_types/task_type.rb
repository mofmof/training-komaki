# frozen_string_literal: true

module ObjectTypes
  class TaskType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :detail, String
    field :limit_on, GraphQL::Types::ISO8601Date, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end