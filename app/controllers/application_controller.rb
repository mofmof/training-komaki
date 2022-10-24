class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Tokenが確認できない場合はセッションを空にする(CSRF対策)
  protect_from_forgery with: :null_session
end
