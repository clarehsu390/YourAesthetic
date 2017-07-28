class Api::PinsController < ApplicationController
  def create
    @pin = current_user.pins.new(pin_params)
    @pin.creator_id = current_user.id
    if @pin.save
      render "api/pins/index"
    else
      render json: @pin.errors.full_messages
    end

  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update_attributes(pin_params)
      render "api/pins/show"
    else
      render json: @pin.errors.full_messages
    end
  end

  def index
    @pins = Pin.all
  end

  def show
    @pin = Pin.find(params[:id])
  end

  private

  def pin_params
    params.require(:pin).permit(:name, :description, :image_url, :creator_id)
  end
end
