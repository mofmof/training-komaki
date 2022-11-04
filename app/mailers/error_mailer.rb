class ErrorMailer < ApplicationMailer
  def error_notification(user, error)
    @error = error
    mail to: user.email, subject: "バックグラウンド実行でエラーが発生しました"
  end
end
