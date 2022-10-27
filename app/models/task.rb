class Task < ApplicationRecord
  belongs_to :status, optional: true
  belongs_to :user, optional: true
end
