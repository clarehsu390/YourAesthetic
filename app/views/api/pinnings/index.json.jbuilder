@pinnings.each do |p|
  json.pin p.pin_id
  json.board p.board_id
end
