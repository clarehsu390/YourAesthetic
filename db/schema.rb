# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170727174124) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "user_id",     null: false
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["title"], name: "index_boards_on_title", using: :btree
    t.index ["user_id"], name: "index_boards_on_user_id", using: :btree
  end

  create_table "follows", force: :cascade do |t|
    t.integer  "teacher_id", null: false
    t.integer  "student_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_follows_on_student_id", using: :btree
    t.index ["teacher_id"], name: "index_follows_on_teacher_id", using: :btree
  end

  create_table "pinnings", force: :cascade do |t|
    t.integer "board_id", null: false
    t.integer "pin_id"
    t.index ["board_id"], name: "index_pinnings_on_board_id", using: :btree
    t.index ["pin_id"], name: "index_pinnings_on_pin_id", using: :btree
  end

  create_table "pins", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.string   "image_url"
    t.string   "creator_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["creator_id"], name: "index_pins_on_creator_id", using: :btree
    t.index ["name"], name: "index_pins_on_name", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                        null: false
    t.string   "password_digest",                                 null: false
    t.string   "session_token",                                   null: false
    t.string   "image_url",       default: "/images/avatar.jpeg", null: false
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
