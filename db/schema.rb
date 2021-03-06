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

ActiveRecord::Schema.define(version: 2018_10_08_202346) do

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "matches", force: :cascade do |t|
    t.integer "game_id"
    t.integer "user_id"
    t.date "match_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "win"
  end

  create_table "scythes", force: :cascade do |t|
    t.integer "game_id"
    t.string "faction"
    t.string "player_mat"
    t.integer "score"
    t.integer "winning_score"
    t.integer "turns"
    t.integer "players"
    t.boolean "airships"
    t.string "winner"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "match_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.string "uid"
    t.string "image"
  end

end
