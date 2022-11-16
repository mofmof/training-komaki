# frozen_string_literal: true

module ObjectTypes
  class TeamType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
  end
end
