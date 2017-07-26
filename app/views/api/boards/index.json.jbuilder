json.array! @boards do |board|
  json.title board.title
  json.description board.description
  json.user_id board.user.id
  json.id board.id
  json.saved_pins board.pins
end
