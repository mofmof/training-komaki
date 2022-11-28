class AddOwnerIdToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :owner_id, :integer
  end
end
