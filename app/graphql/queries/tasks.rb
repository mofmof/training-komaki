module Queries
  class Tasks < Queries::AuthRequiredQuery
    type ObjectTypes::TaskType.connection_type, null: false

    argument :from, String, required: false
    argument :to, String, required: false
    argument :title, String, required: false

    def resolve(from: nil, to: nil, title: nil, **args)
      tasks = current_user.tasks.order(limit_on: :asc, created_at: :desc)
      tasks = tasks.where(limit_on: from..to) if from.present? && to.present?
      tasks = tasks.where("title LIKE ?",  "%#{title}%") if title.present?
      tasks
    end
  end
end
