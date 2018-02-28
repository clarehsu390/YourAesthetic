Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :search, only: [:index]
    resources :users, only: [:create, :show] do
      resources :boards, only: [:index, :show]
    end
    resource :follow, only: [:create, :destroy]
    resources :boards, only: [:show, :update, :destroy, :create]
    resources :pinnings, only: [:create, :destroy]
    # delete '/pinnings', to: 'pinnings#destroy', as: "pinning"
    resources :pins, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy, :show]


  end
  root to: "static_pages#root"
end
