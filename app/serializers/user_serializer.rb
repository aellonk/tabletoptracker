class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :image
  has_many :matches
  has_many :games
end
