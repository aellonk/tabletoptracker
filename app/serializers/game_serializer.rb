class GameSerializer < ActiveModel::Serializer
  attributes :id, :name
  # belongs_to :users
  has_many :matches
  has_many :users, through: :matches
end
