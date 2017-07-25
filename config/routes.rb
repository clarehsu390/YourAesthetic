Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :boards, only: [:index]
    end
    resources :boards, only: [:show, :update, :destroy, :create]
    resources :pinnings, only: [:create, :destroy, :index]
    resources :pins, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy, :show]

  end
  root to: "static_pages#root"
end
