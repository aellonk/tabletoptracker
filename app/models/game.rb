class Game < ApplicationRecord
	has_many :matches
	has_many :users, through: :matches
	validates :name, uniqueness: true
	# scope :favorite, -> {where(
	# }

def self.favorite
	games = self.all.collect do |game|
	 		game.matches.count
	 		game.name
	 	end
	sorted = games.group_by{|name| name}.sort_by{|k, v| -v.size}
	if sorted[0][1].size == sorted[1][1].size
		top = []
		top.push(sorted.map{|game| game.first}.first)
		top.push(sorted.map{|game| game.first}.second)
		top.join(' & ')
	else
		sorted.map{|game| game.first}.first
	end
end




end

