class Api::PinningsController < ApplicationController
  def create
    @pinning = Pinning.new(pinning_params)
    if @pinning.save
      @pin = @pinning.pin
      render 'api/pins/show'
    else
      render json: @pinning.errors.full_messages
    end
  end

  def remove
    @pinning = Pinning.find(params[:id])
    @board = @pinning.board
    if @pinning
      @pinning.destroy
      render 'api/boards/show'
    else
      render json: @pinning.errors.full_messages, status: 400
    end
  end
  private

  def pinning_params
    params.require(:pinning).permit(:board_id, :pin_id)
  end
end
