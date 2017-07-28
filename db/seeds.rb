# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Pin.destroy_all
Board.destroy_all
Follow.destroy_all
Pinning.destroy_all

user1 = User.create!(username: "guest", password: "password", image_url: "https://img.huffingtonpost.com/asset/570eb9d71600002b0031ba2e.jpeg?ops=scalefit_950_800_noupscale")
user2 = User.create!(username: "username", password: "password", image_url: "https://cdn2-www.dogtime.com/assets/uploads/2016/08/corgi-puppy-6.jpg")
user3 = User.create!(username: "Corgi", password: "password", image_url: "https://i.imgur.com/ehZPuwA.png")
user4 = User.create!(username: "Barney_Stinson", password: "password", image_url: "https://az616578.vo.msecnd.net/files/2016/01/17/635886557531071372-1009885900_tumblr_static_bdj3tvirs5k4wgww44sc8k4kc.jpg")
user5 = User.create!(username: "Ted_Mosby", password: "123456", image_url: "https://ithinkalotandstuff.files.wordpress.com/2014/04/ted_profile1.jpg")
user6 = User.create!(username: "Captain_America", password: "password", image_url: "https://nerdist.com/wp-content/uploads/2016/05/20160506_nerdistnews_capexclusive_1x1.jpg")
user7 = User.create!(username: "black_widow", password: "password", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXEjL-XDKJww2Hm4ynszqS1asIrJN5NEfX2KI3eQ9g05v3KZQ-w")

pin1 = Pin.create!(name: "Scenery", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500677627/hpvinfcjslmnxo3bihtj.jpg", user: User.first)
pin2 = Pin.create!(name: "Black and White Wedding", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500906229/tjfzl7qcwvvtrxm1lqek.jpg", user: User.first)
pin3 = Pin.create!(name: "Colorful Food", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,w_366/v1500595181/brooke-lark-229136_gjxdfq.jpg", user: User.first)
pin4 = Pin.create!(name: "Fruit", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/c_scale,w_366/v1500595180/brenda-godinez-228181_zvxet4.jpg", user: User.first)
pin5 = Pin.create!(name: "Hipster", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500680398/stsqmvoopqdyl1xwvrgp.jpg", user: User.first)
pin6 = Pin.create!(name: "Drinks", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1501266122/brooke-lark-175184_ffa2h2.jpg", user: User.first)
pin7 = Pin.create!(name: "Watermelon", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500935975/uhztmoyqsuyx24skahq7.jpg", user: user1, description: "I love watermelon!" )
pin8 = Pin.create!(name: "Loyal Apple", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500936175/aq3wyzdvvtwe0xci3ov4.jpg", user: user1, description: "Apple Watch")
pin9 = Pin.create!(name: "Perspective", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500935755/ystwwglkjmcaqo74z6q7.jpg", user: user2, description: "Different perspectives")
pin10 = Pin.create!(name: "Cookies", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500931569/j0nfqqcguv7tiygowdpq.jpg", user: user5, description: "I want to bake cookies")
pin11 = Pin.create!(name: "Hamburgers", image_url: "http://res.cloudinary.com/dwetqmwgw/image/upload/v1501262514/bkdlusguav1hacj2jzhi.jpg", user: user3, description: "Burgers burgers burgers!")
pin12 = Pin.create!(name: "Healthy Food", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500934708/bnnrf2p3db1s9qthxrrc.jpg", user: user6, description: "Food inspiration")
pin13 = Pin.create!(name: "Beach", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500935418/xix3ue3dfmymjfieyspu.jpg", user: user2, description: "Serene ocean waves")
pin14 = Pin.create!(name: "City View", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500929441/hmp9p3wpoyig1dgeb9gx.jpg", user: user3, description: "At daylight")
pin15 = Pin.create!(name: "Husky", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500680726/s4o6zmwnyiuoaicgisli.jpg", user: user1, description: "SO FLUFFY")
pin16 = Pin.create!(name: "Corgi", image_url: "https://res.cloudinary.com/dwetqmwgw/image/upload/v1500677075/n0734c1uliqfegppphwa.jpg", user: user1)


Follow.create!(teacher_id: user1.id, student_id: user2.id)
Follow.create!(teacher_id: user1.id, student_id: user3.id)
Follow.create!(teacher_id: user1.id, student_id: user4.id)
Follow.create!(teacher_id: user2.id, student_id: user3.id)
Follow.create!(teacher_id: user3.id, student_id: user2.id)
Follow.create!(teacher_id: user4.id, student_id: user5.id)
Follow.create!(teacher_id: user6.id, student_id: user7.id)
Follow.create!(teacher_id: user5.id, student_id: user1.id)
Follow.create!(teacher_id: user5.id, student_id: user2.id)
Follow.create!(teacher_id: user1.id, student_id: user7.id)

board1 = Board.create!(title: "Cute Dogs", user: user1)
board2 = Board.create!(title: "Food", user: user1)
board3 = Board.create!(title: "My Aesthetic", user: user1)
board4 = Board.create!(title: "Buildings", user: user2)
board5 = Board.create!(title: "Tech", user: user2)
board6 = Board.create!(title: "Dogs", user: user2)
board7 = Board.create!(title: "Setups", user: user3)
board8 = Board.create!(title: "Landscape", user: user4)
board9 = Board.create!(title: "Food Inspiration", user: user4)
board10 = Board.create!(title: "Desktop Backgrounds", user: user5)
board11 = Board.create!(title: "Vacay", user: user6)
board12 = Board.create!(title: "I Love Food", user: user7)

Pinning.create!(board: board1, pin: pin15)
Pinning.create!(board: board1, pin: pin16)
Pinning.create!(board: board2, pin: pin3)
Pinning.create!(board: board2, pin: pin4)
Pinning.create!(board: board2, pin: pin11)
Pinning.create!(board: board2, pin: pin12)
Pinning.create!(board: board3, pin: pin9)
Pinning.create!(board: board4, pin: pin8)
Pinning.create!(board: board4, pin: pin14)
Pinning.create!(board: board6, pin: pin15)
Pinning.create!(board: board6, pin: pin16)
Pinning.create!(board: board7, pin: pin6)
Pinning.create!(board: board10, pin: pin7)
Pinning.create!(board: board10, pin: pin8)
Pinning.create!(board: board9, pin: pin10)
Pinning.create!(board: board9, pin: pin11)
Pinning.create!(board: board8, pin: pin13)
Pinning.create!(board: board8, pin: pin14)
