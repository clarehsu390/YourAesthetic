# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pin.create!(name: "Scenery", image_url: "http://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,r_0,w_366/v1500595180/myles-tan-91630_jntc8n.jpg", user: User.first)
Pin.create!(name: "Black and White Wedding", image_url: "http://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,w_366/v1500595179/anne-edgar-119383_b7gje4.jpg", user: User.first)
Pin.create!(name: "Colorful Food", image_url: "http://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,w_366/v1500595181/brooke-lark-229136_gjxdfq.jpg", user: User.first)
Pin.create!(name: "Fruit", image_url: "http://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,w_366/v1500595180/brenda-godinez-228181_zvxet4.jpg", user: User.first)
Pin.create!(name: "Hipster", image_url: "http://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,w_366/v1500595177/jesus-kiteque-224069_hjsnwi.jpg", user: User.first)
Pin.create!(name: "Desk Inspo", image_url: "http://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,w_330/v1500595020/jeff-sheldon-264922_sdxswf.jpg", user: User.first)
