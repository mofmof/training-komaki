require 'date'

class AlertMailer < ApplicationMailer
  def limit_notification(user)
    @tasks = Task
              .where(
                user_id: user.id,
                limit_on: [
                  (Date.today + Settings.alert_days.FIRST),
                  (Date.today + Settings.alert_days.SECOND)
                ]
              )
              .order(limit_on: :asc, created_at: :desc)
    unless @tasks.empty?
      mail to: user.email, subject: "期限が近づいているタスクがあります"
    end
  end
end
