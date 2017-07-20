class Pin < ApplicationRecord
  validates :name, :user

  belong_to :user,
  primary_key: :id,
  foreign_kay: :creator_id,
  class_name: :User
end
