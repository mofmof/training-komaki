class Task < ApplicationRecord
  belongs_to :status, optional: true
  belongs_to :user, optional: true
  belongs_to :team, optional: true
  belongs_to :owner, class_name: "User", foreign_key: "owner_id", optional: true
end
