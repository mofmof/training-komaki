class AddOwnerIdToTeam < ActiveRecord::Migration[7.0]
  def change
    add_column :teams, :owner_id, :Integer, null: false
  end
end
