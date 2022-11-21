class FixTypeOfOwnerId < ActiveRecord::Migration[7.0]
  def change
    remove_column :teams, :owner_id, :integer
    add_reference :teams, :owner, foreign_key: {to_table: :users}
  end
end
