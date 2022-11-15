class CompleteMailer < ApplicationMailer
  def complete_notification(user, message, url)
    @message = message
    @url = url
    mail to: user.email, subject: message
  end
end
