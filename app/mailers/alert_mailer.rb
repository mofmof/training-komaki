class AlertMailer < ApplicationMailer
  def limit_notification
    user = User.first
    mail to: user, subject: "test mail"
  end
end
