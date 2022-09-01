class ApplicationController < ActionController::API
  # include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_validation_errors
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  
  before_action :authenticate_member
  
private

  def current_member
    Member.find(session[:member_id])
  end

  def authenticate_member
    byebug
    return if current_member
    render json: {errors: {Member: "not authorized"}}, status: :unauthorized #401
  end

  def render_uprocessable_entity(invalid)
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity #422
  end

  def render_not_found(e)
    render json: { errors: e.message }, status: :not_found #404
  end

end

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

# later on this will return the user that's currently logged in
