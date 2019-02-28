class GamesController < ApplicationController
	before_action :require_login

	def new
		@game = Game.new
		@games = Game.all
	end

	def create
			@game = Game.find_or_initialize_by(game_params)
			
			if Game.where(:id => @game.id).exists?
				redirect_to new_game_match_path(@game)
			elsif @game.save
			redirect_to new_game_match_path(@game)
			else
				flash[:notice] = "That game could not be added. Please try again."
				redirect_to new_game_path
			end
	end

	def show
		@game = Game.find(params[:id]) 
		respond_to do |format|
      			format.html { render :show }      # Render post in HTML format
      			format.json { render json: @game, status: 200} # Render post in JSON format
   		end
	end

	

	private

	def game_params
		params.require(:game).permit(:name)
	end

	
end
