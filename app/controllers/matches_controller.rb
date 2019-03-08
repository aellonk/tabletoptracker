class MatchesController < ApplicationController
	before_action :require_login

	def index
		@matches = Match.all

	end

	def new
		set_game
		@games = Game.all
		@match = Match.new
	end

	def create
		set_game
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
		set_game
		set_match
		@user = current_user
		respond_to do |format|
      			format.html { render :show }      # Render post in HTML format
      			format.json { render json: @match} # Render post in JSON format
   			end

	end

	def edit
		set_game
		set_match
	end

	def update
		set_game
		set_match

		if @match.update(match_params)
		flash[:alert] = "Your match was successfully updated."
		redirect_to game_match_path(@game, @match)
		else
	      redirect_to root_path
	    end
	end

	def destroy
		set_game
		set_match
		@user = current_user
		@match.destroy
		flash[:alert] = "Your match was successfully deleted."
		redirect_to user_path(@user.id)
	end

	private

	def match_params
		params.require(:match).permit(:user_id, :game_id, :match_date, :win, scythe_attributes: [:faction, :player_mat, :score, :winning_score, :turns, :players, :airships, :winner])
	end

	def set_game
		@game = Game.find(params[:game_id])
	end

	def set_match
		@match = Match.find(params[:id])
	end

	
end
