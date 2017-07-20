class Api::BoardsController < ApplicationController

  def create
    @board = Board.new(board_params)
  end

  def index
    @boards = current_user.boards
  end

  def show
    @board = Board.find(params[:id])
    render "api/boards/show"
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def board_params
    params.require(:board).permit(:title, :user )
  end

end
