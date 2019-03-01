module UserHelper
	def current_user_page(current_user)
		if request.path.include?("#{current_user.id}")
			link_to('Add a match here', new_game_path, id: 'get-new-game-form')
		end
	end

	def win_column(match)
		 if match.win == true 
              "Yes" 
             else 
              "No" 
             end 
	end
end
