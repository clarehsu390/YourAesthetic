class Api::FollowsController < ApplicationController


  def create
    @follow = current_user.out_follows.create(follow_params)
    @user = @follow.student
    render 'api/follow/create'
  end

  def destroy
    @follow = current_user.out_follows.where(follow_params).first
    @follow.destroy
    render 'api/follow/show'
  end

  private

  def follow_params
    params.require(:follow).permit(:teacher_id, :student_id)
  end
end
