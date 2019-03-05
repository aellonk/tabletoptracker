class ScytheSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :match, inverse_of: :scythe
end
