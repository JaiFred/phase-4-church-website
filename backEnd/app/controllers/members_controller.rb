class MembersController < ApplicationController

    # Gets all users 
    # Sets up routes for user display

    def index
        render json: Member.all
    end

    # Get '/me' 
    def show
        if current_member
            render json: current_member, status: :ok
        else
            render json: { errors: "No Active Sessions" }, status: :unauthorized
        end
    end

    # POST '/sign up' 
    def create
        member = Member.create!(member_params)
        session[:member_id] = member.id
        render json: member, status: :created
    end

    private

    # t.string :name
    # t.string :username
    # t.string :password
    # t.string :email

    def member_params
        params.permit(:username, :password, :password_confirmation)
    end

end
