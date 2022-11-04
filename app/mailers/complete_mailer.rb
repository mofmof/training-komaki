class CompleteMailer < ApplicationMailer
  def complete_notification(user)
    mail to: user.email, subject: "タスクのインポートが完了しました。"
  end
end
