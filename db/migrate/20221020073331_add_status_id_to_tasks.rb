class AddStatusesIdToTasks < ActiveRecord::Migration[7.0]
  def change
    add_reference :tasks, :statuses, foreign_key: true
  end
end
