Rails.application.routes.draw do
  root to: 'tasks#index'
  get '*path', to: 'tasks#index'

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
end
