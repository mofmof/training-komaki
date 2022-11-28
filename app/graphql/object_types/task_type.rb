# frozen_string_literal: true

module ObjectTypes
  class TaskType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :detail, String
    field :limit_on, GraphQL::Types::ISO8601Date, null: false
    field :status_id, ID
    field :status, ObjectTypes::StatusType
    field :user_id, ID
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :team_id, ID
    field :owner_id, ID
    field :owner, ObjectTypes::UserType
  end
end
