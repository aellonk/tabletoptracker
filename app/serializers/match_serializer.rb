class MatchSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id, :match_date, :win
  belongs_to :game
  belongs_to :user
end
