require 'sidekiq/web'

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  namespace :auth do
    resources :sessions, only: %i[index]
  end

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
    # mount Sidekiq::Web, at: '/sidekiq'
    mount LetterOpenerWeb::Engine, at: "letter_opener"
  end
  mount Sidekiq::Web, at: '/sidekiq'
  post "/graphql", to: "graphql#execute"

  root to: 'tasks#index'
  get '*path', to: 'tasks#index'
end
