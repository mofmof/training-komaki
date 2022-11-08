module Mutations
  class ExportTask < NoArgumentsMutation
    field :message, String, null: false

    def resolve
      begin
        TaskExportJob.perform_later(current_user)
      rescue StandardError => e
        GraphQL::ExecutionError.new(e.message)
      end
      { message: "バックグラウンドでCSVエクスポート処理を開始しました。" }
    end
  end
end
