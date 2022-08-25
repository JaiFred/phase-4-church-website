class BulletinsController < ApplicationController

    def index
        render json: Bulletin.all
    end
    
end
