class AlertMailJob < ApplicationJob
  queue_as :default

  def perform(*args)
    users = User.where(notification_flg: "enabled")
    users.each do |user|
      AlertMailer.limit_notification(user).deliver_later
      puts "==== send AlertMail! ===="
    end
  end
end
