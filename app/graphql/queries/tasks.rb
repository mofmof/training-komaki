module Queries
  class Tasks < Queries::AuthRequiredQuery
    type ObjectTypes::TaskType.connection_type, null: false

    argument :from, String, required: false
    argument :to, String, required: false
    argument :title, String, required: false

    def resolve(**args)
      tasks = current_user.tasks.order(limit_on: :asc, created_at: :desc)
      tasks = tasks.where(limit_on: args[:from]..args[:to]) if args[:from].present? && args[:to].present?
      tasks = tasks.where("title LIKE ?",  "%#{args[:title]}%") if args[:title].present?
      tasks
    end
  end
end
