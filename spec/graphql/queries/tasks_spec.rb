require 'rails_helper'

RSpec.describe Queries::Tasks do
  query_string = <<-GRAPHQL
  query FetchTasks(
    $first: Int
    $last: Int
    $before: String
    $after: String
    $from: String
    $to: String
    $title: String
  ) {
    tasks(
      first: $first
      last: $last
      before: $before
      after: $after
      from: $from
      to: $to
      title: $title
    ) {
      edges {
        node {
          id
          title
          detail
          limitOn
          status {
            id
            name
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  GRAPHQL

  it "loads all tasks" do
    result = MyappSchema.execute(query_string, context: {current_user: User.find(2)})
    puts result.inspect
    assert_equal 10, result["data"]["tasks"]["edges"].size
  end

  it "loads tasks filtered title" do
    variables = {title: "2"}
    result = MyappSchema.execute(query_string, context: {current_user: User.find(2)}, variables: variables)
    puts result.inspect
    assert_equal 1, result["data"]["tasks"]["edges"].size
  end

end
