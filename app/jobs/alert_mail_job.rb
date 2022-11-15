class AlertMailJob < ApplicationJob
  queue_as :default

  def perform(*args)
    users = User.all
    users.each do |user|
      AlertMailer.limit_notification(user).deliver_later
      puts "==== send AlertMail! ===="
    end
  end
end
