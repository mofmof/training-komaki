class AlertMailJob < ApplicationJob
  queue_as :default

  def perform(*args)
    AlertMailer.limit_notification.deliver_now
    puts "==== send AlertMail! ===="
  end
end
