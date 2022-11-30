class CreateInvitaitons < ActiveRecord::Migration[7.0]
  def change
    create_table :invitaitons do |t|
      t.string :token, null: false
      t.string :email, null: false
      t.references :team, null: false, foreign_key: true
      t.timestamps
    end
  end
end
