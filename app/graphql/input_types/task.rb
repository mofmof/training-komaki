module InputTypes
  class Task < Types::BaseInputObject
    graphql_name 'TaskInput'

    argument :title, String, required: true
    argument :detail, String, required: false
    argument :limit_on, GraphQL::Types::ISO8601Date, required: true
  end
end
