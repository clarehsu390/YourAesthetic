class Board < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :pins,
  primary_key: :id,
  foreign_key: :board_id,
  class_name: :Pin

end
