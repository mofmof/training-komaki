class TaskImportJob < ApplicationJob
  queue_as :default
  require 'csv'

  def perform(user, file)
    CSV.foreach(file.path, headers: true).each do |row|
      Task.create(
        title: row['title'],
        detail: row['detail'],
        limit_on: row['limit_on'],
        status_id: row['status'],
        user_id: user.id
      )
    end
    CompleteMailer.complete_notification(user).deliver_now
  rescue => e
    ErrorMailer.error_notification(user, e).deliver_now
  end
end
