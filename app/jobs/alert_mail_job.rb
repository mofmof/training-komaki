class AlertMailJob < ApplicationJob
  queue_as :default

  def perform(*args)
    AlertMailer.limit_notification.deliver_later
    puts "==== send AlertMail! ===="
  end
end
