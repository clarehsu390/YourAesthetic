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

  def update
    @board = current_user.boards.find(params[:id])
    if @board.update_attributes(board_params)
      render "api/boards/show"
    else
      render json: @board.errors.full_messages
    end
  end

  def destroy
    @board = current_user.boards.find(params[:id])
    @board.destroy
    render "api/boards/show"
  end

  private

  def board_params
    params.require(:board).permit(:title, :user, :description)
  end

end
