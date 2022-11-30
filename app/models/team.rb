class Team < ApplicationRecord
  belongs_to :user, foreign_key: "owner_id"
  has_many :team_users
  has_many :users, through: :team_users
  has_many :tasks
  has_many :invitaitons
end
