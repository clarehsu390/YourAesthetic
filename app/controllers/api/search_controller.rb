class Api::SearchController < ApplicationController
    def index
        @results = {}
        @results[:pins] = Pin.whose_name_starts_with(params[:query]);
        @results[:users] = User.whose_username_starts_with(params[:query]);

        render 'api/search/index'
    end
        
end
