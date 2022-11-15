class TaskExportJob < ApplicationJob
  queue_as :default
  require 'csv'

  def perform(user)
    tmpfile_name = "tmp/tmpfile_#{user.id}.csv"
    # CSV生成
    CSV.open(tmpfile_name, "w") do |csv|
      csv.flock(File::LOCK_EX)
      csv << %w(id title detail limit_on status_id)
      user.tasks.each do |task|
        values = [
          task.id,
          task.title,
          task.detail,
          task.limit_on,
          task.status_id
        ]
        csv << values
      end
      csv.flock(File::LOCK_UN)
    end

    file = File.open(tmpfile_name)

    csv = CsvUpload.create!(
      file: ActiveStorage::Blob.create_and_upload!(
        io: file,
        filename: "tasks_#{Time.current.strftime('%Y_%m_%d')}.csv"
      )
    )
    file.close

    CompleteMailer.complete_notification(user, "タスクのエクスポートが完了しました", csv.file.url).deliver_now
  rescue => e
    ErrorMailer.error_notification(user, e).deliver_now
  end
end
