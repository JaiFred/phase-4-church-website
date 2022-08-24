class ApplicationController < ActionController::API
  before_action :authenticate_user
  include ActionController::Cookies

  # goals 
  # only Admin can access bulletin
  # Member can view bulletin
  # Admin can view bulletin
  # Admin can update, post, delete bulletin

  # Admin belongs_to bulletins
  # Admin belongs_to members

  # todays goals 8/23/2022
  # Set up client side routes
  # Set up Admin, member, bulletin, relationships
  # Set up Admin authentication
  # Set up Member authentication

  # controller action for signup, login and logout
  # Individual sessions for member and admin
  # 

  def current_user
    @current_user ||= Member.find_by_id(session[:member_id])
  end

  def authenticate_user 
    render json: {errors: "not authorized"}, status: :unauthorized unless current_user
  end

end
