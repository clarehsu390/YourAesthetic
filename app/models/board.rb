class Board < ApplicationRecord
  validates :title, :user, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :pinnings,
  primary_key: :id,
  foreign_key: :board_id,
  class_name: :Pinning

  has_many :pins,
    through: :pinnings,
    source: :pin

end
