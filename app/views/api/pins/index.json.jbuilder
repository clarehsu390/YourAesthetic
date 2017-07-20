json.array! @pins.each do |pin|
  json.name pin.name
  json.description pin.description
  json.image_url pin.image_url
end
