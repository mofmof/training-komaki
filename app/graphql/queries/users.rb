module Queries
  class Users < Queries::AuthRequiredQuery
    type [ObjectTypes::UserType], null: false

    def resolve
      ::User.where(role: "general") if current_user.role === "admin"
    end
  end
end
