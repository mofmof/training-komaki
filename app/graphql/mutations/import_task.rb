module Mutations
  class ImportTask < BaseMutation
    field :message, String, null: false

    argument :file, ApolloUploadServer::Upload, required: true

    def resolve(file:)
      csv = CsvUpload.create!(
        file: ActiveStorage::Blob.create_and_upload!(
          io: file,
          filename: file.original_filename
        )
      )
      begin
        TaskImportJob.perform_later(current_user, csv.id)
      rescue StandardError => e
        GraphQL::ExecutionError.new(e.message)
      end
      { message: "バックグラウンドでCSVインポート処理を開始しました。" }
    end
  end
end
