class TaskExportJob < ApplicationJob
  queue_as :default
  require 'csv'

  def perform(user)

    # CSV生成
    output = CSV.generate do |csv|
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

    s3 = Aws::S3::Client.new(
      access_key_id: Rails.application.credentials.dig(:aws, :access_key_id),
      secret_access_key: Rails.application.credentials.dig(:aws, :secret_access_key),
      region: Rails.application.credentials.dig(:aws, :s3, :region),
      s3_endpoint: Rails.application.credentials.dig(:aws, :s3, :endpoint)
    )

    # オブジェクトのキー
    key = "export/tasks_#{Time.current.strftime('%Y_%m_%d')}.csv"

    # S3へアップロード
    s3.put_object(
                  bucket: Rails.application.credentials.dig(:aws, :s3, :bucket),
                  key: key,
                  body: NKF.nkf('-w', output),
                  content_type: 'text/csv'
                )

    url = Aws::S3::Presigner.new(client: s3).presigned_url(
      :get_object,
      bucket: Rails.application.credentials.dig(:aws, :s3, :bucket),
      key: key,
      response_content_type: 'application/force-download'
    )

    CompleteMailer.complete_notification(user, "タスクのエクスポートが完了しました", url).deliver_now
  rescue => e
    ErrorMailer.error_notification(user, e).deliver_now
  end
end
