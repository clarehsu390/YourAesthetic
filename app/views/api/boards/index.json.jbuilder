json.array! @boards do |board|
  json.title board.title
  json.description board.description
  json.user_id board.user.id
end
