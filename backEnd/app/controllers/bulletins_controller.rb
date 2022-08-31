class BulletinsController < ApplicationController
  before_action :set_bulletin, only: [:show, :update, :destroy]
  before_action :authorize_member, only: [:update, :destroy]

    def index
        render json: Bulletin.all, status: :ok #200
    end

    def show 
        render json: @bulletin, serializer: BulletinDetailSerializer, status: :ok
    end

    def create
        bulletin = current_member.create_bulletins.create!(bulletins_params)
        render json: bulletin, status: :created
    end

    def update
        @bulletin.update!(bulletin_params)
        render json: @bulletin, status: :ok
      end

    def destroy
        @bulletin.destroy
    end

    private

    def set_bulletin
        @bulletin = Bulletin.find(params[:id])
    end

    def authorize_member
        return if current_member.admin? || @bulletin.user == current_member
        render json: { errors: "You are not permitted to perform that action." }, status: :forbidden #403
    end

    # t.string "title"
    # t.string "activity"
    # t.datetime "starts"
    # t.datetime "ends"
    # t.bigint "admin_id", null: false
    # t.bigint "member_id", null: false
    # t.datetime "created_at", precision: 6, null: false
    # t.datetime "updated_at", precision: 6, null: false
    # t.index ["admin_id"], name: "index_bulletins_on_admin_id"
    # t.index ["member_id"], name: "index_bulletins_on_member_id"

    def bulletin_params
        params.permit(:title, :activity, :starts, :ends, :member_id)
    end


end
