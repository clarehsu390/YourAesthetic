json.array! @boards do |board|
  json.title board.title
  json.description board.description
  json.user board.user.username
end
