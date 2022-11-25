module InputTypes
  class Task < Types::BaseInputObject
    graphql_name 'TaskInput'

    argument :title, String, required: true
    argument :detail, String, required: false
    argument :limit_on, String, required: true
    argument :status_id, ID, required: true
    argument :user_id, ID, required: true
    argument :team_id, ID
  end
end
