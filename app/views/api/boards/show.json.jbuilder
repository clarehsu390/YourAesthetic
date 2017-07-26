# json.partial! "api/boards/board", board: @board
json.id @board.id
json.title @board.title
json.description @board.description
json.user_id @board.user_id
json.pins @board.pins

json.set! "pinnings" do
  @board.pinnings.each do |pinning|
    json.set! pinning.id do
      json.id  pinning.id
      json.pin_id pinning.pin_id
      json.board_id  pinning.board_id
    end
  end
end
