class SessionsController < ApplicationController

    # POST '/login'
    def create
        member = Member.find_by(username: params[:username])
        if member&.authenticate(params[:password])
            session[:member_id] = member.id
            render json: member, status: :ok
        else
            render json: { errors: 'Invalid credentials' }, status: :unauthorized
        end
    end

     # POST '/login'
    def create_admin
        admin = Admin.find_by(username: params[:username])
        if member&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :ok
        end
    end

    # DELETE '/logout'
    def destroy
        if current_member
            session.clear
        else
            render json: { errors: 'No active session'}, status: :unauthorized
        end
    end

    def destroy_admin
        if current_admin
            session.clear
        else
            render json: { errors: 'No acti'}
        end
    end
end