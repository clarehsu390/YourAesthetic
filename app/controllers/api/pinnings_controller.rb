class Api::PinningsController < ApplicationController
  def create
    @pinning = Pinning.new(pinning_params)
    # debugger
    if @pinning.save
      @pin = @pinning.pin
      render 'api/pins/show'
    else
      render json: @pinning.errors.full_messages
    end
  end

  def index
    @pinnings = Pinning.all
  end

  def destroy
    @pinning = Pinning.where(board_id: params[:pinning][:board_id], pin_id: params[:pinning][:pin_id]).first
    # debugger
    @board = @pinning.board
    @pinning.destroy
    render 'api/boards/show'
  end
  # private

  def pinning_params
    params.require(:pinning).permit(:board_id, :pin_id)
  end
end
