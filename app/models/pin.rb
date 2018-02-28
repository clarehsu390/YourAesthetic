class Pin < ApplicationRecord

  include PgSearch
  pg_search_scope :whose_name_starts_with,
                  :against => :name,
                  :using => {
                    :tsearch => {:prefix => true}
                  }
  validates :name, :user, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User

  has_many :pinnings,
    primary_key: :id,
    foreign_key: :pin_id,
    class_name: :Pinning

  has_many :boards,
    through: :pinnings,
    source: :board


end
