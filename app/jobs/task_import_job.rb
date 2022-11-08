class TaskImportJob < ApplicationJob
  queue_as :default
  require 'csv'

  def perform(user, id)
    csv = CsvUpload.find(id)
    tmp_file_path = Rails.root.join('tmp', 'import.csv')

    file_content = csv.file.download
    File.open(tmp_file_path, 'wb') do |file|
      file.write(file_content)
    end

    CSV.foreach(tmp_file_path, headers: true).each do |row|
      Task.create(
        title: row['title'],
        detail: row['detail'],
        limit_on: row['limit_on'],
        status_id: row['status'],
        user_id: user.id
      )
    end
    CompleteMailer.complete_notification(user, "タスクのインポートが完了しました", "").deliver_now
  rescue => e
    ErrorMailer.error_notification(user, e).deliver_now
  ensure
    File.delete(tmp_file_path) if File.exist?(tmp_file_path)
  end
end
