json.array! @pins.each do |pin|
  json.name pin.name
  json.description pin.description
  json.image_url pin.image_url
  json.id pin.id
  json.boards pin.boards
  json.user pin.user
end
