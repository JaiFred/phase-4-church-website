class SessionsController < ApplicationController
    skip_before_action :authenticate_member

    # POST '/login'
    def create
        member = Member.find_by(username: params[:username])
        if member&.authenticate(params[:password])
            session[:member_id] = member.id
            puts "login#{session[:member_id]}"
            render json: member, status: :ok
        else
            render json: { errors: 'Invalid credentials' }, status: :unauthorized #401
        end
    end

    # POST '/login'
    def create_admin
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :ok
        end
    end

    # DELETE '/logout'
    def destroy
        if current_member
            session.clear
        else
            render json: { errors: 'No active session'}, status: :unauthorized #401
        end
    end

    # DELETE '/adminlogout'
    def destroy_admin
        if current_admin
            session.clear
        else
            render json: { errors: 'No active session'}, status: :unauthorized #401
        end
    end
end