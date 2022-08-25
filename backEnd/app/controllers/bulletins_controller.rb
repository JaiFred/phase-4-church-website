class BulletinsController < ApplicationController


    # t.string :name
    # t.string :date
    # t.string :activity
    # t.integer :member_id
    # t.integer :admin_id

    # Get /bulletin
    def index
        render json: Bulletin.all
    end

    def create
        bulletin = Bulletin.create!(bulletin_params)
        render json: bulletin, status: :created
    end

    def update 
        bulletin = Bulletin.find_by(params[:id])
    end

    private

    # t.string :name
    # t.string :username
    # t.string :password
    # t.string :email

    def bulletin_params
        params.permit(:name, :date, :activity, )
    end

    
end
