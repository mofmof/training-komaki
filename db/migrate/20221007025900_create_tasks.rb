class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :detail, null: false
      t.date :limit_on, null: false
      t.timestamps
    end
  end
end
