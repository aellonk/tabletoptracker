class MatchSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id, :match_date, :win, :scythe 
  belongs_to :game
  belongs_to :user
  has_one :scythe, inverse_of: :match, :dependent => :destroy
end
