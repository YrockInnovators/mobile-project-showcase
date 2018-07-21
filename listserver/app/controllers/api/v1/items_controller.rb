module Api
    module V1
       class ItemsController < ApplicationController
        def index
            name = Item.where("lower(firstname) like ?", "%#{params[:name]}%".downcase);
            #items = Item.order('created_at DESC');
           render json: {status: '500', data: name}, status: :ok
        end  
       end
    end
end