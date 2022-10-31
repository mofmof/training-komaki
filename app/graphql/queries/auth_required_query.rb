module Queries
  class AuthRequiredQuery < Queries::BaseQuery
    def authorized?(*args)
      raise GraphQL::ExecutionError.new('signin required!') unless current_user
      true
    end
  end
end
