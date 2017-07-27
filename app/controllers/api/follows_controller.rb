class Api::FollowsController < ApplicationController
  before_action :required_logged_in
  def create
    @follow = current_user.out_follows.create(student_id: params[:user_id])
    render 'api/follow/show'
  end

  def destroy
    @follow = current_user.out_follows.destroy(student_id: params[:user_id])
  end
end
