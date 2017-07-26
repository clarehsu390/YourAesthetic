class Pinning < ApplicationRecord
  validates :board, :pin, presence: true

  belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board

  belongs_to :pin,
    primary_key: :id,
    foreign_key: :pin_id,
    class_name: :Pin
end

# Pinning.joins(:pin).joins(:board).where("pinnings.pin_id = pins.id AND boards.id = 17").select("pinnings.id, pinnings.pin_id, pinnings.board_id, pins.name, pins.image_url, pins.description").as_json
