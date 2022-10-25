class Task < ApplicationRecord
  belongs_to :status, optional: true
end
