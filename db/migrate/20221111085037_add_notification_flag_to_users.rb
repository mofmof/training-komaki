class AddNotificationFlagToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :notification_flg, :integer, default: 1, null: false
  end
end
