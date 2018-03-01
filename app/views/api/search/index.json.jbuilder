json.array! @results[:pins].each do |pin|
    json.name pin.name
    json.image_url pin.image_url
    json.id pin.id
end

json.array! @results[:users].each do |user|
    json.username user.username
    json.id user.id
    json.image_url user.image_url
end