class Team < ApplicationRecord
  has_many :users, through: :team_users
  has_many :team_users
  accepts_nested_attributes_for :team_users
end
