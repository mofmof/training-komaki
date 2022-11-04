module Mutations
  class ImportTask < BaseMutation
    field :message, String, null: false

    argument :file, ApolloUploadServer::Upload, required: true

    def resolve(file:)
      TaskImportJob.perform_now(current_user, file)
      { message: "バックグラウンドでCSVインポート処理を開始しました。" }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
