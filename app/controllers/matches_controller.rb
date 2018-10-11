class MatchesController < ApplicationController
	before_action :require_login

	def index
		@matches = Match.all

	end

	def new
		@game = Game.find(params[:game_id])
		@games = Game.all
		@match = Match.new
	end

	def create
		@game = Game.find(params[:game_id]) # finding the parent

	    @match = @game.matches.build(match_params)
	 		 
	    @match.user = current_user

	    if @match.save
	    	flash[:notice] = "Your match was successfully added!"
	      redirect_to game_match_path(@game, @match)

	     # "games/#{@game.id}/matches/#{@match.id}"
	      # games/:game_id/matches/:id

	    else
	      redirect_to root_path
	    end
	end

	def show
		@game = Game.find(params[:game_id]) # finding the parent
		@match = Match.find(params[:id])
		@user = current_user

	end

	def edit
		@game = Game.find(params[:game_id])
		@match = Match.find(params[:id])
	end

	def update
		@game = Game.find(params[:game_id])
		@match = Match.find(params[:id])

		if @match.update(match_params)
		flash[:alert] = "Your match was successfully updated."
		redirect_to game_match_path(@game, @match)
		else
	      redirect_to root_path
	    end
	end

	def destroy
		@game = Game.find(params[:game_id])
		@match = Match.find(params[:id])
		@user = current_user
		@match.destroy
		flash[:alert] = "Your match was successfully deleted."
		redirect_to user_path(@user.id)
	end

	private

	def match_params
		params.require(:match).permit(:user_id, :game_id, :match_date, :win, scythe_attributes: [:faction, :player_mat, :score, :winning_score, :turns, :players, :airships, :winner])
	end

	
end
