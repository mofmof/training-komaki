require 'rails_helper'

RSpec.describe Mutations::CreateTask do
  mutation_string = <<-GRAPHQL
    mutation CreateTask($params: TaskInput!) {
      createTask(input: { params: $params }) {
        task {
          id
          title
          detail
          limitOn
          statusId
          userId
        }
      }
    }
  GRAPHQL

  it "タスクを1件新規登録できる" do
    variables = {
      "params": {
        "title": "New Task",
        "detail": "detail",
        "limitOn": "2022-11-30",
        "statusId": 1,
        "userId": 2
      }
    }
    result = MyappSchema.execute(mutation_string, variables: variables)
    puts result.inspect
    expect(result["data"]["createTask"]["task"]["title"]).to eq("New Task")
  end
end
