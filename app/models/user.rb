# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :tasks
  has_many :created_teams, class_name: "Team", foreign_key: "owner_id"
  has_many :team_users
  has_many :teams, through: :team_users
  has_many :own_tasks, class_name: "User", foreign_key: "owner_id"
  enum role: {general: 0, admin: 1}
  enum notification_flg: {disabled: 0, enabled: 1}
end
