class TaskExportJob < ApplicationJob
  queue_as :default
  require 'csv'

  def perform(user)

    # CSV生成
    CSV.open("tmp/tmpfile.csv", "w") do |csv|
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
    end

    csv = CsvUpload.create!(
      file: ActiveStorage::Blob.create_and_upload!(
        io: File.open("tmp/tmpfile.csv"),
        filename: "tasks_#{Time.current.strftime('%Y_%m_%d')}.csv"
      )
    )

    CompleteMailer.complete_notification(user, "タスクのエクスポートが完了しました", csv.file.url).deliver_now
  rescue => e
    ErrorMailer.error_notification(user, e).deliver_now
  end
end
