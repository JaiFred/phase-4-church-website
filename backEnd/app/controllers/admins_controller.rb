class AdminsController < ApplicationController

    def index
        render json: Admin.all
    end

    # Get '/admin' 
    def show
        if current_admin
            render json: current_admin, status: :ok
        else
            render json: { errors: "No Active Sessions" }, status: :unauthorized
        end
    end

    # POST '/admin sign up' 
    # def create
    #     admin = Admin.create!(admin_params)
    #     session[:admin_id] = admin.id
    #     render json: admin, status: :created
    # end

    # private

    # t.string :name
    # t.string :username
    # t.string :password
    # t.string :email

    # def admin_params
    #     params.permit(:username, :password, :password_confirmation)
    # end

end
