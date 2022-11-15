module Mutations
  class UpdateNotificationFlg < BaseMutation
    field :result, String, null: true
    argument :notification_flg, String, required: true

    def resolve(notification_flg:)
      user = current_user
      user.update!(notification_flg:)
      {result: "notification:#{user.notification_flg}"}
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
