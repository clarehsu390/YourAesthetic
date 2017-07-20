class Pin < ApplicationRecord
  validates :name, :user, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User
end
