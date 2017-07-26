class Api::BoardsController < ApplicationController

  def create
    @board = current_user.boards.new(board_params)
    @board.user_id = current_user.id
    if @board.save
      render "api/boards/show"
    else
      render json: @board.errors.full_messages
    end
  end

  def index
    @boards = current_user.boards
  end

  def show
    # @board = current_user.boards.find(params[:id])
    @board = Board.find(params[:id])
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
    params.require(:board).permit(:title, :user_id, :description)
  end

end
