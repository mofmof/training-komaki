class AddStatusIdToTasks < ActiveRecord::Migration[7.0]
  def change
    add_reference :tasks, :status, foreign_key: true
  end
end
